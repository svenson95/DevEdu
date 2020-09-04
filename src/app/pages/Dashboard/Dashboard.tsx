import React, {useContext, useEffect, useState} from 'react';
import {
    IonCard,
    IonContent,
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

const DashboardPage = ({ ...props }) => {

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
                    <ProgressBoard url={props.match.url}/>
                </div>
            </IonContent>
        </IonPage>
    );
};

const ProgressBoard = ({ ...props }) => {

    const [unitsCount, setUnitsCount] = useState(0);
    const [unitsDoneInPercentage, setUnitsPercentage] = useState(0);
    const [nextLesson, setNextLesson] = useState(null as any);
    const [currentLesson, setCurrentLesson] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const authContext = useContext(AuthContext);
    const errorContext = useContext(ErrorContext);
    const history = useHistory();

    useEffect(() => {
        getDetails();
    }, [authContext.user, props.url]);

    function getDetails() {
        loadContext.setLoading(true);
        DataService.getAllLessons()
            .then(postsArray => {
                setUnitsCount(postsArray.length);
                setUnitsPercentage(authContext?.user?.progress?.length / postsArray.length);

                getNextLesson(postsArray);
                getCurrentLesson(postsArray);
            })
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));
    }

    function getNextLesson(allLessons: any) {
        loadContext.setLoading(true);
        for (let postIdx = 0; postIdx < allLessons.length; postIdx++) {
            if (!authContext?.user?.progress?.includes(allLessons[postIdx])) {
                DataService.getSubjectPost(allLessons[postIdx])
                    .then(subjectPost => setNextLesson(subjectPost))
                    .catch(error => errorContext.setMessage(error))
                    .finally(() => loadContext.setLoading(false));
                break;
            }
        }
    }

    function getCurrentLesson(allLessons: any) {
        loadContext.setLoading(true);
        DataService.getLatestPost()
            .then(postId => {
                DataService.getSubjectPost(postId)
                    .then(subjectPost => setCurrentLesson(subjectPost))
                    .catch(error => errorContext.setMessage(error))
                    .finally(() => loadContext.setLoading(false));
            })
            .catch(error => {
                errorContext.setMessage(error);
                loadContext.setLoading(false);
            });
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
                        <h2>
                            <span className="lesson-label unselectable">Nächste Lektion</span>
                            <span className="dashboard-post" onClick={() => history.push(nextLesson?.subject + "/" + nextLesson?.url)}>
                                <span className="post-title">{nextLesson?.title}</span>
                                <span className="post-description">{nextLesson?.description}</span>
                            </span>
                        </h2>
                    </div>
                }
                {currentLesson && <hr/>}
                {currentLesson &&
                    <div className="lesson-link">
                        <h2>
                            <span className="lesson-label unselectable">Aktuelle Lektion</span>
                            <span className="dashboard-post" onClick={() => history.push(currentLesson?.subject + "/" + currentLesson?.url)}>
                                <span className="post-title">{currentLesson?.title}</span>
                                <span className="post-description">{currentLesson?.description}</span>
                            </span>
                        </h2>
                    </div>
                }
            </IonList>
        </IonCard>
    )
};

export default DashboardPage;
