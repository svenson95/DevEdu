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
    const [exams, setExams] = useState(null as any);

    useEffect(() => {
        DataService.getExamDates().then(exams => {
            const examsArr: Date[] = [];
            exams.forEach((exam: any) => {
                const today = new Date();
                const examDate = new Date(exam.date);

                if (today < examDate) {
                    exam.date = examDate;
                    examsArr.push(exam);
                }
            });
            setExams(examsArr);
        });
    }, []);

    return (
        <IonPage>
            <IonContent>
                <div className="dashboard__container">
                    <IonCard className="start__card">
                        <IonList>
                            <h1>Nächste Klausur</h1>
                            <div className="ddu-exam-dates">
                                {exams && exams.map((exam: any, index: number) =>
                                    <h2 className="ddu-exam" key={index}>
                                        <span className="date">{exam.date.getDate()}.{exam.date.getMonth()+1}.{exam.date.getFullYear()}</span>
                                        <span className="exam">{exam.subject.toUpperCase()} - {exam.title}</span>
                                    </h2>
                                )}
                            </div>
                            {exams && exams.length === 0 && <h2>Keine anstehenden Klausuren</h2>}
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
    }, [authContext.user, authContext.user.progress.length, props.url]);

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
                console.log(error);
            })
            .finally(() => loadContext.setLoading(false));
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
                    <div className="ded-post-wrapper">
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
    const [data, setData] = useState(null as any);
    const [weeksPosts, setWeeksPosts] = useState(null as any);
    const loadState = useContext(LoadContext);
    const history = useHistory();

    useEffect(() => {

        loadState.setLoading(true);
        DataService.getLastWeeks().then(weeks => {
            setData(weeks);
        }).catch(error => console.log('ERROR', error));

    }, []);

    useEffect(() => {
        if (data) {
            getWeekPosts().then(posts => {
                console.log('posts', posts);
                setWeeksPosts(posts);
            })
        }
    }, [data]);

    async function getWeekPosts() {
        const weekArr: any[] = [];
        loadState.setLoading(true);
        data.forEach((week: any) => {
            weekArr.push({ schoolWeek: week.schoolWeek, posts: [] });
            week.posts.forEach(async (postEl: any) => {
                await DataService.getSubjectPost(postEl.id)
                    .then(post => {
                        weekArr.find((week: any) => week.schoolWeek === postEl.schoolWeek).posts.push(post);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
        });
        loadState.setLoading(false);
        return weekArr;
    }

    const fullSubjectName = (subject: string) => {
        return subjects.find(el => el.url.substring(1) === subject)?.title;
    };

    function dateConverter(date: any) {
        const day = date.slice(8, 10);
        const month = date.slice(5, 7);
        const year = date.slice(0, 4);
        return day + '.' + month + '.' + year;
    }

    return (
        weeksPosts && weeksPosts.map((week: any, index: number) =>
            <IonCard className="ded-school-week-card" key={index}>
                <IonList>
                    <div className="card-header">
                        <h1>Schulwoche #{week.schoolWeek}</h1>
                        <h4>{dateConverter(data[index].posts[data[index].posts.length-1].lessonDate)} - {dateConverter(data[index].posts[0].lessonDate)}</h4>
                    </div>
                    {week.posts.map((post: any, index: number) =>
                        <div className="ded-post-wrapper" key={index}>
                            <h2>
                                <span className="lesson-label unselectable">{fullSubjectName(post.subject)}</span>
                                <span className="dashboard-post" onClick={() => history.push(post.subject + "/" + post.url)}>
                                <span className="post-title">{post.title}</span>
                                <span className="post-description">{post.description}</span>
                            </span>
                            </h2>
                        </div>
                    )}
                    {/*{lessons && lessons.map((lesson: any, index: number) =>*/}
                    {/*    <div className="lesson-link" key={index}>*/}
                    {/*        <h2>*/}
                    {/*            <span className="lesson-label unselectable">{fullSubjectName(lesson.subject)}</span>*/}
                    {/*            <span className="dashboard-post" onClick={() => history.push(lesson.subject + "/" + lesson.url)}>*/}
                    {/*                    <span className="post-title">{lesson.title}</span>*/}
                    {/*                    <span className="post-description">{lesson.description}</span>*/}
                    {/*                </span>*/}
                    {/*        </h2>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </IonList>
            </IonCard>
        )
    )
};

export default DashboardPage;
