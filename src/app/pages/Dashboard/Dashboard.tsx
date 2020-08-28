import React, {useContext, useEffect, useState} from 'react';
import {
    IonCard,
    IonContent,
    IonIcon,
    IonList,
    IonPage,
    IonProgressBar
} from '@ionic/react';
import './Dashboard.scss';
import DataService from "../../services/data.service";
import {ErrorContext} from "../../components/split-pane/Content";
import {LoadContext} from "../../../App";
import {AuthContext} from "../../context/auth.context";
import {useHistory} from "react-router";
import {arrowBack} from "ionicons/icons";

const DashboardPage = () => {

    return (
        <IonPage>
            <IonContent>
                <div className="dashboard__container">
                    <IonCard className="start__card">
                        <IonList>
                            <h1>Nächste Klausur</h1>
                            <h2>01.09.2020 - Lernfeld 6 | Entwickeln und Bereitstellen von Anwendungssystemen</h2>
                        </IonList>
                    </IonCard>
                    <ProgressBoard/>
                </div>
            </IonContent>
        </IonPage>
    );
};

const ProgressBoard = () => {

    const [unitsCount, setUnitsCount] = useState(0);
    const [unitsDoneInPercentage, setUnitsPercentage] = useState(0);
    const [nextLesson, setNextLesson] = useState(null as any);
    const [currentLesson, setCurrentLesson] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const authContext = useContext(AuthContext);
    const errorContext = useContext(ErrorContext);
    const history = useHistory();

    useEffect(() => {
        loadContext.setLoading(true);
        DataService.getMaxProgress()
            .then(postsArray => {
                setUnitsCount(postsArray.length);
                setUnitsPercentage(authContext?.user?.progress?.length / postsArray.length);

                for (let i = 0; i < postsArray.length; i++) {
                    if (!authContext?.user.progress.includes(postsArray[i])) {
                        getNextLesson(postsArray[i]);
                        break;
                    }
                }

                getCurrentLesson(postsArray[postsArray.length-1]);
            })
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));
    }, []);

    function getNextLesson(postId: string) {
        DataService.getSubjectPost(postId)
            .then(subjectPost => {
                setNextLesson(subjectPost);
            })
            .catch(error => console.log(error));
    }

    function getCurrentLesson(postId: string) {
        DataService.getSubjectPost(postId)
            .then(subjectPost => {
                setCurrentLesson(subjectPost);
            })
            .catch(error => errorContext.setMessage(error));
    }

    return (
        <IonCard className="progressBoard__card">
            <IonList>
                <h1>Fortschritt</h1>
                <h3>Lektion {authContext?.user?.progress.length} von {unitsCount ? unitsCount : "..."}</h3>
                <div className="progress__bar__wrapper">
                    <IonProgressBar value={unitsDoneInPercentage} />
                </div>
                {nextLesson &&
                    <div className="lesson-link">
                        <h2 onClick={() => history.push(nextLesson?.subject + "/" + nextLesson?.url)}>
                            Nächste Lektion:
                            <span className="dashboard-post">
                                <span className="post-title"><u>{nextLesson?.title}</u></span>
                                |
                                <span className="post-description">{nextLesson?.description}</span>
                            </span>
                        </h2>
                        <IonIcon src={arrowBack}/>
                    </div>
                }
                {currentLesson &&
                    <div className="lesson-link">
                        <h2 onClick={() => history.push(currentLesson?.subject + "/" + currentLesson?.url)}>
                            Aktuelle Lektion:
                            <span className="dashboard-post">
                                <span className="post-title"><u>{currentLesson?.title}</u></span>
                                |
                                <span className="post-description">{currentLesson?.description}</span>
                            </span>
                        </h2>
                        <IonIcon src={arrowBack}/>
                    </div>
                }
            </IonList>
        </IonCard>
    )
};

export default DashboardPage;
