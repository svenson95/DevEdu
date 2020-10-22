import React, {useContext, useEffect, useState} from "react";
import {
    IonBadge,
    IonButton,
    IonItem
} from "@ionic/react";
import './ExamDateEntry.scss';
import {subjects} from "../../../data/menuTitles";
import DataService from "../../services/data.service";
import {LoadContext} from "../../../App";
import {ErrorContext} from "../split-pane/Content";
import typeName from "../../app-common/type-name";
import transformDate from "../../app-common/transform-date";

const ExamDateEntry = ({ ...props }) => {

    const [showLessons, setShowLessons] = useState(false);
    const [lessons, setLessons] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);

    useEffect(() => {
        const postIdsArray = '_' + props.exam?.lessons?.join();
        if (lessons === null && postIdsArray) {
            DataService.getExamDateLessons(postIdsArray)
                .then(data => {
                    setLessons(data);
                })
                .catch(error => errorContext.setMessage(error))
                .finally(() => loadContext.setLoading(false));
        }
    }, [showLessons]);

    function isCompleted(examDate: any) {
        return new Date(examDate) < new Date();
    }

    function findSubjectTitle(subjectUrl: string) {
        return subjects.find(subject => subject.url.substring(1) === subjectUrl)?.title || 'not found subject';
    }

    const daysLeft = (date: string) => {
        const oneDay = 24 * 60 * 60 * 1000;
        const today: any = new Date();
        const todayDateString = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
        const todayDate: any = new Date(todayDateString)
        const dateObj: any = new Date(date);
        const days = Math.ceil(Math.abs((todayDate - dateObj) / oneDay));
        return 'Noch ' + days + (days > 1 ? ' Tage' : ' Tag');
    }

    const weekDay = (date: string) => {
        const dateObj = new Date(date);
        const weekdays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
        return weekdays[dateObj.getDay()-1];
    }

    return (
        <div className={`ddu-exam-date ${isCompleted(props.exam.date) ? 'completed' : ''}`}>
            <div className="ddu-first-row unselectable">
                <div className="tbk-left-badges">
                    <p className="tbk-exam-date-label">
                        {transformDate(props.exam.date)} · {weekDay(props.exam.date)}
                    </p>
                    {!isCompleted(props.exam.date) &&
                        <IonBadge className="ddu-days-left-badge" mode="md">
                            {daysLeft(props.exam.date)}
                        </IonBadge>
                    }
                </div>
            </div>
            <div className="ddu-second-row">
                <span className="value" id="ddu-exam-title">
                    {findSubjectTitle(props.exam.subject)} · {props.exam.title}
                </span>
            </div>
            {props.exam.lessons &&
                <div className={`tbk-third-row ${showLessons ? 'open' : ''}`}>
                    <hr/>
                    <IonButton onClick={() => setShowLessons(!showLessons)}>
                        {showLessons ? 'Ausblenden' : 'Lektionen anzeigen'}
                    </IonButton>
                    <hr/>
                </div>
            }
            {showLessons && lessons && lessons.map((post: any, index: number) =>
                <div className="tbk-exam-lesson-post" key={index}>
                    <IonItem
                        key={index}
                        routerLink={post.subject + "/" + post.url}
                        routerDirection="forward"
                        lines="none"
                        detail={true}
                    >
                        <div className="element__wrapper">
                            <div className="title">{post.title}</div>
                            <div className="description">
                                <span className="tbk-description-label">{post.description}</span>
                                <span className={`tbk-post-type ${post.type}`}>{typeName(post.type)}</span>
                            </div>
                        </div>
                    </IonItem>
                </div>
            )}
        </div>
    )
}

export default ExamDateEntry;
