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
import {ErrorContext, SearchPostContext} from "../../app-common/split-pane/Content";
import {LoadContext} from "../../../App";
import {AuthContext} from "../../context/auth.context";
import {useHistory} from "react-router";
import {subjects} from "../../../data/menuTitles";
import {LoadingSpinner} from "../../components/Spinner";
import ExamDateEntry from "../../components/ExamDateEntry/ExamDateEntry";
import typeName from "../../app-common/type-name";
import {getWeekday} from "../../app-common/getWeekday";

const DashboardPage = ({ ...props }) => {

    const [weeksData, setWeeksData] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const searchPostContext = useContext(SearchPostContext);

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getLastWeeks()
            .then(weeks => setWeeksData(weeks))
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));

    }, []);

    return (
        <IonPage>
            <IonContent className={searchPostContext.isSearching_mobile ? "mobile-search-content--open" : ""}>
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
        loadContext.setLoading(true);
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
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));
    }, []);

    function isUpcomingExam(date: string) {
        const actualMonth = new Date().getMonth();
        const dateMonth = new Date(date).getMonth();
        return dateMonth >= actualMonth;
    }

    function sorted(exams: any) {
        return exams.sort(function(a: any, b: any) {
            if (a.date > b.date) return 1;
            if (a.date < b.date) return -1;
            return 0;
        })
    }

    return (
        <IonCard className="start__card" mode="md">
            <IonList>
                <div className="card-header">
                    <h1>Anstehende Klausuren</h1>
                </div>
                {exams && sorted(exams).map((exam: any, index: number) => isUpcomingExam(exam.date) &&
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
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));
    }

    function getNextLesson(allLessons: any) {
        loadContext.setLoading(true);
        for (let postIdx = 0; postIdx < allLessons.length; postIdx++) {
            if (!authContext?.user?.progress?.includes(allLessons[postIdx])) {
                loadContext.setLoading(true);
                DataService.getSubjectPost(allLessons[postIdx])
                    .then(subjectPost => {
                        setNextLesson(subjectPost);
                    })
                    .catch(error => errorContext.setMessage(error))
                    .finally(() => loadContext.setLoading(false));
                break;
            }
        }
    }

    return (
        <IonCard className="progressBoard__card" mode="md">
            <IonList>
                <div className="card-header">
                    <h1>Fortschritt</h1>
                </div>
                <h3>
                    Lektion {authContext?.user?.progress.length} von {allUnitsLength ? allUnitsLength : "..."}
                </h3>
                <IonProgressBar className="ddu-lessons-progressbar" value={unitsDoneInPercentage} />
                <h3>
                    Woche {props.weeksData ? props.weeksData[0].schoolWeek : '...'} von {allWeeksLength}
                </h3>
                <IonProgressBar className="ddu-weeks-progressbar" value={weeksDoneInPercentage} />
                {nextLesson === null && loadContext.isLoading && <LoadingSpinner/>}
                {nextLesson &&
                    <div className="ddu-post-wrapper">
                        <h2>
                            <span className="lesson-label">Nächste Lektion</span>
                            <span className="dashboard-post" onClick={() => history.push(nextLesson?.subject + "/" + nextLesson?.url)}>
                                <span className="post-title">{nextLesson?.title}</span>
                                <span className="tbk-post-description">
                                    <span className="tbk-description-label">{nextLesson?.description}</span>
                                    <span className={`tbk-post-type ${nextLesson?.type}`}>
                                        {typeName(nextLesson?.type)}
                                    </span>
                                </span>
                            </span>
                        </h2>
                    </div>
                }
            </IonList>
        </IonCard>
    )
};

const SchoolWeekCards = ({ ...props }) => {

    const [weekDays, setWeekDays] = useState([] as any)
    const loadContext = useContext(LoadContext);
    const history = useHistory();

    useEffect(() => {
        if (props.weeksData) {
            const formedGroups: any[] = [];
            console.log('weeksData', props.weeksData);
            props.weeksData.forEach((week: any) => {
                const days: any[] = [];
                week.posts.forEach((post: any) => {
                    const day = days.find(el => el.date === post.lessonDate);
                    if (!day) {
                        days.push({
                            date: post.lessonDate,
                            posts: [post]
                        })
                    } else {
                        day.posts.push(post);
                    }
                });
                formedGroups.push({ schoolWeek: week.schoolWeek, days: days})
            });
            setWeekDays(formedGroups);
            console.log('formedGroups', formedGroups);
        }
    }, [props.weeksData]);

    const firstWeekDay = (index: number) => {
        return dateConverter(props.weeksData[index].posts[props.weeksData[index].posts.length-1].lessonDate);
    };
    const lastWeekDay = (index: number) => {
        return dateConverter(props.weeksData[index].posts[0].lessonDate);
    };
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
        <div className="ddu-week-card-wrapper">
            {weekDays && weekDays.map((week: any, index: number) =>
                <IonCard className="ddu-school-week-card" key={index} mode="md">
                    <IonList>
                        <div className="card-header">
                            <h1>Schulwoche #{week.schoolWeek}</h1>
                            <h4>{firstWeekDay(index)} - {lastWeekDay(index)}</h4>
                        </div>
                        {week.days.map((day: any, index: number) =>
                            <div className="tbk-week-day-container" key={index}>
                                <div className="tbk-weekday-header">
                                    <p className="tbk-weekday-label">{getWeekday(day.date)}</p>
                                    <p className="tbk-date-label">{dateConverter(day.date)}</p>
                                </div>
                                {day.posts.map((post: any, index: number) =>
                                    <div className="ddu-post-wrapper" key={index}>
                                        <h2>
                                            <span className="lesson-label">{fullSubjectName(post.subject)}</span>
                                            <span className="dashboard-post" onClick={() => history.push(post.subject + "/" + post.details.url)}>
                                        <span className="post-title">{post?.details?.title}</span>
                                        <span className="tbk-post-description">
                                            <span className="tbk-description-label">{post?.details?.description}</span>
                                            <span className={`tbk-post-type ${post?.details?.type}`}>
                                                {typeName(post?.details?.type)}
                                            </span>
                                        </span>
                                    </span>
                                        </h2>
                                    </div>
                                )}
                            </div>
                        )}
                        {/*{week.posts.map((post: any, index: number) =>*/}
                        {/*    <div className="ddu-post-wrapper" key={index}>*/}
                        {/*        <h2>*/}
                        {/*            <span className="lesson-label">{fullSubjectName(post.subject)}</span>*/}
                        {/*            <span className="dashboard-post" onClick={() => history.push(post.subject + "/" + post.details.url)}>*/}
                        {/*                <span className="post-title">{post?.details?.title}</span>*/}
                        {/*                <span className="tbk-post-description">*/}
                        {/*                    <span className="tbk-description-label">{post?.details?.description}</span>*/}
                        {/*                    <span className={`tbk-post-type ${post?.details?.type}`}>*/}
                        {/*                        {typeName(post?.details?.type)}*/}
                        {/*                    </span>*/}
                        {/*                </span>*/}
                        {/*            </span>*/}
                        {/*        </h2>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </IonList>
                </IonCard>
            )}
            {loadContext.isLoading && props.weeksData === null &&
                <LoadingSpinner/>
            }
        </div>
    )
};

export default DashboardPage;
