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
import ExamDateEntry from "../../components/ExamDateEntry/ExamDateEntry";

const DashboardPage = ({ ...props }) => {

    const [weeksData, setWeeksData] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getLastWeeks().then(weeks => {
            setWeeksData(weeks);
        }).catch(error => {
            errorContext.setMessage(error);
            loadContext.setLoading(false);
        });

    }, []);

    return (
        <IonPage>
            <IonContent>
                <div className="dashboard__container">
                    <NextExams/>
                    <ProgressBoard url={props.match.url} weeksData={weeksData}/>
                    <SchoolWeekCards weeksData={weeksData} />
                </div>
            </IonContent>
        </IonPage>
    );
};

const NextExams = ({ ...props }) => {

    const [exams, setExams] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);

    useEffect(() => {
        DataService.getExamDates()
            .then(exams => {
                const examsArray: Date[] = [];
                exams.forEach((exam: any) => {
                    const today = new Date();
                    const examDate = new Date(exam.date);

                    if (today < examDate) {
                        examsArray.push(exam);
                    }
                });
                setExams(examsArray)
            })
            .catch(error => {
                errorContext.setMessage(error);
            });
    }, []);

    function transformDate(date: string | Date) {
        if (typeof date === 'string') {
            const year = date.substring(0, 4);
            const month = date.substring(5, 7);
            const day = date.substring(8, 10);
            return day + "." + month + "." + year;
        }
    }

    function findSubjectTitle(subjectUrl: string) {
        return subjects.find(subject => subject.url.substring(1) === subjectUrl)?.title || 'not found subject';
    }

    function sameMonth(date1: string, date2: Date) {
        const firstDate = new Date(date1);
        return firstDate.getMonth() === date2.getMonth();
    }

    function sorted(exams: any) {
        return exams.sort(function(a: any, b: any) {
            if (a.date > b.date) return 1;
            if (a.date < b.date) return -1;
            return 0;
        })
    }

    const daysLeft = (date: string) => {
        const oneDay = 24 * 60 * 60 * 1000;
        const today: any = new Date();
        const dateObj: any = new Date(date);
        const days = Math.ceil(Math.abs((today - dateObj) / oneDay));
        return 'Noch ' + days + (days > 1 ? ' Tage' : ' Tag');
    };

    return (
        <IonCard className="start__card">
            <IonList>
                <div className="card-header">
                    <h1>Anstehende Klausuren</h1>
                </div>
                {exams && sorted(exams).map((exam: any, index: number) => sameMonth(exam.date, new Date()) &&
                    <ExamDateEntry exam={exam} key={index}/>
                )}
                {loadContext.isLoading && !exams && <LoadingSpinner/>}
                {exams && exams.length === 0 && <h2>Keine anstehenden Klausuren</h2>}
            </IonList>
        </IonCard>
    )
};

const ProgressBoard = ({ ...props }) => {

    const [allUnits, setAllUnits] = useState(null as any);
    const [unitsDoneInPercentage, setUnitsPercentage] = useState(0);
    const [weeksDoneInPercentage, setWeeksPercentage] = useState(0);
    const [nextLesson, setNextLesson] = useState(null as any);

    const loadContext = useContext(LoadContext);
    const authContext = useContext(AuthContext);
    const errorContext = useContext(ErrorContext);
    const history = useHistory();

    const allUnitsLength = allUnits?.length;
    const allWeeksLength = 40;

    useEffect(() => {
        getDetails();
    }, [authContext.user, authContext.user.progress.length, props.url]);

    useEffect(() => {
        if (props.weeksData) {
            setWeeksPercentage(props.weeksData[0].schoolWeek / allWeeksLength);
        }
    }, [props.weeksData]);

    function getDetails() {
        loadContext.setLoading(true);
        DataService.getAllLessons()
            .then(postsArray => {
                setAllUnits(postsArray);
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
                    .then(subjectPost => {
                        setNextLesson(subjectPost);
                    })
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
                <div className="card-header">
                    <h1>Fortschritt</h1>
                </div>
                <h3 className={'unselectable'}>
                    Lektion {authContext?.user?.progress.length} von {allUnitsLength ? allUnitsLength : "..."}
                </h3>
                <IonProgressBar className="ddu-lessons-progressbar" value={unitsDoneInPercentage} />
                <h3 className={'unselectable'}>
                    Woche {props.weeksData ? props.weeksData[0].schoolWeek : '...'} von {allWeeksLength}
                </h3>
                <IonProgressBar className="ddu-weeks-progressbar" value={weeksDoneInPercentage} />
                {nextLesson === null && loadContext.isLoading && <LoadingSpinner/>}
                {nextLesson &&
                    <div className="ddu-post-wrapper">
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

const SchoolWeekCards = ({ ...props }) => {

    const [weeksPosts, setWeeksPosts] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const history = useHistory();

    const firstWeekDay = (index: number) => {
        return dateConverter(props.weeksData[index].posts[props.weeksData[index].posts.length-1].lessonDate);
    };
    const lastWeekDay = (index: number) => {
        return dateConverter(props.weeksData[index].posts[0].lessonDate);
    };
    const fullSubjectName = (subject: string) => {
        return subjects.find(el => el.url.substring(1) === subject)?.title;
    };

    useEffect(() => {
        if (props.weeksData) {
            getWeekPosts().then(result => {
                setWeeksPosts(result);
                loadContext.setLoading(false);
            });
        }
    }, [props.weeksData]);

    async function getWeekPosts() {
        const weekArray: any[] = [];

        for (let index = 0; index < props.weeksData.length; index++) {
            weekArray.push({ schoolWeek: props.weeksData[index].schoolWeek, posts: [] });

            for (let postIndex = 0; postIndex < props.weeksData[index].posts.length; postIndex++) {
                const subjectPost = props.weeksData[index].posts[postIndex];

                DataService.getSubjectPost(subjectPost.id)
                    .then(post => {
                        weekArray[index].posts[postIndex] = post;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }

        return weekArray;
    }

    function dateConverter(date: any) {
        const day = date.slice(8, 10);
        const month = date.slice(5, 7);
        const year = date.slice(0, 4);
        return day + '.' + month + '.' + year;
    }

    return (
        <div className="ddu-week-card-wrapper">
            {weeksPosts && weeksPosts.map((week: any, index: number) =>
                <IonCard className="ddu-school-week-card" key={index}>
                    <IonList>
                        <div className="card-header">
                            <h1>Schulwoche #{week.schoolWeek}</h1>
                            <h4>{firstWeekDay(index)} - {lastWeekDay(index)}</h4>
                        </div>
                        {week.posts.map((post: any, index: number) =>
                            <div className="ddu-post-wrapper" key={index}>
                                <h2>
                                    <span className="lesson-label unselectable">{fullSubjectName(post.subject)}</span>
                                    <span className="dashboard-post" onClick={() => history.push(post.subject + "/" + post.url)}>
                                    <span className="post-title">{post.title}</span>
                                    <span className="post-description">{post.description}</span>
                                </span>
                                </h2>
                            </div>
                        )}
                    </IonList>
                </IonCard>
            )}
            {loadContext.isLoading && weeksPosts === null &&
                <LoadingSpinner/>
            }
        </div>
    )
};

export default DashboardPage;
