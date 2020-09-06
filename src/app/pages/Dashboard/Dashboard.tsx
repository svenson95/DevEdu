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
import {subjects} from "../../../data/menuTitles";
import {LoadingSpinner} from "../../components/Spinner";

const DashboardPage = ({ ...props }) => {
    const [allUnits, setAllUnits] = useState(null as any);

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
                    <ProgressBoard url={props.match.url} allUnits={allUnits} setAllUnits={setAllUnits} />
                    {allUnits && <LastLessons allUnits={allUnits} setAllUnits={setAllUnits} />}
                </div>
            </IonContent>
        </IonPage>
    );
};

const ProgressBoard = ({ ...props }) => {

    const [unitsDoneInPercentage, setUnitsPercentage] = useState(0);
    const [nextLesson, setNextLesson] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const authContext = useContext(AuthContext);
    const errorContext = useContext(ErrorContext);
    const history = useHistory();

    const allUnitsLength = props.allUnits?.length;

    useEffect(() => {
        getDetails();
    }, [authContext.user, props.url]);

    function getDetails() {
        loadContext.setLoading(true);
        DataService.getAllLessons()
            .then(postsArray => {
                props.setAllUnits(postsArray);
                setUnitsPercentage(authContext?.user?.progress?.length / postsArray.length);

                getNextLesson(postsArray);
            })
            .catch(error => {
                errorContext.setMessage(error);
                loadContext.setLoading(false);
            });
    }

    function getNextLesson(allLessons: any) {
        loadContext.setLoading(true);
        for (let postIdx = 0; postIdx < allLessons.length; postIdx++) {
            if (!authContext?.user?.progress?.includes(allLessons[postIdx])) {
                DataService.getSubjectPost(allLessons[postIdx])
                    .then(subjectPost => setNextLesson(subjectPost))
                    .catch(error => {
                        errorContext.setMessage(error);
                        loadContext.setLoading(false);
                    });
                break;
            }
        }
    }

    return (
        <IonCard className="progressBoard__card">
            <IonList>
                <h1>Fortschritt</h1>
                <h3>Lektion {authContext?.user?.progress.length} von {allUnitsLength ? allUnitsLength : "..."}</h3>
                <div className="progress__bar__wrapper">
                    <IonProgressBar value={unitsDoneInPercentage} />
                </div>
                {nextLesson === null && loadContext.isLoading && <LoadingSpinner/>}
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
            </IonList>
        </IonCard>
    )
};

const LastLessons = ({ ...props }) => {
    const [lessons, setLessons] = useState(null as any);
    const loadState = useContext(LoadContext);
    const history = useHistory();

    useEffect(() => {

        loadState.setLoading(true);
        DataService.getLastLessons().then(posts => {
            Promise.all([
                DataService.getSubjectPost(posts[4]),
                DataService.getSubjectPost(posts[3]),
                DataService.getSubjectPost(posts[2]),
                DataService.getSubjectPost(posts[1]),
                DataService.getSubjectPost(posts[0])
            ])
                .then(posts => {
                    setLessons(posts);
                    loadState.setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    loadState.setLoading(false);
                });
        });

    }, []);

    const fullSubjectName = (subject: string) => {
        return subjects.find(el => el.url.substring(1) === subject)?.title;
    };

    return (
        <IonCard className="lastLessons-card">
            <IonList>
                <h1>Letzte Lektionen</h1>
                {lessons === null && loadState.isLoading && <LoadingSpinner/>}
                {lessons && lessons.map((lesson: any, index: number) =>
                    <div className="lesson-link" key={index}>
                        <h2>
                            <span className="lesson-label unselectable">{fullSubjectName(lesson.subject)}</span>
                            <span className="dashboard-post" onClick={() => history.push(lesson.subject + "/" + lesson.url)}>
                                    <span className="post-title">{lesson.title}</span>
                                    <span className="post-description">{lesson.description}</span>
                                </span>
                        </h2>
                    </div>
                )}
            </IonList>
        </IonCard>
    )
};

export default DashboardPage;
