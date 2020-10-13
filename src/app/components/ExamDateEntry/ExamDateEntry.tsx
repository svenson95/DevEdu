import React from "react";
import {
    IonBadge
} from "@ionic/react";
import './ExamDateEntry.scss';
import {subjects} from "../../../data/menuTitles";
import Exams from "../../pages/Exams/Exams";

const ExamDateEntry = ({ ...props }) => {

    function isCompleted(examDate: any) {
        return new Date(examDate) < new Date();
    }

    function findSubjectTitle(subjectUrl: string) {
        return subjects.find(subject => subject.url.substring(1) === subjectUrl)?.title || 'not found subject';
    }

    function transformDate(date: string | Date) {

        if (typeof date === 'string') {
            const year = date.substring(0, 4);
            const month = date.substring(5, 7);
            const day = date.substring(8, 10);
            return day + "." + month + "." + year;
        }
    }

    const daysLeft = (date: string) => {
        const oneDay = 24 * 60 * 60 * 1000;
        const today: any = new Date();
        const dateObj: any = new Date(date);
        const days = Math.ceil(Math.abs((today - dateObj) / oneDay));
        return 'Noch ' + days + (days > 1 ? ' Tage' : ' Tag');
    }

    return (
        <div className={isCompleted(props.exam.date) ? "ddu-exam-date completed" : "ddu-exam-date"}>
            <div className="ddu-first-row">
                <div className="ddu-left-badges">
                    <IonBadge className="ddu-exam-date-badge" mode="md">{transformDate(props.exam.date)}</IonBadge>
                    {!isCompleted(props.exam.date) &&
                        <IonBadge className="ddu-days-left-badge" mode="md">
                            {daysLeft(props.exam.date)}
                        </IonBadge>
                    }
                </div>
                <IonBadge className="ddu-exam-subject-badge" mode="md">{findSubjectTitle(props.exam.subject)}</IonBadge>
            </div>
            <div className="ddu-second-row">
                <span className="value" id="ddu-exam-title">{props.exam.title}</span>
            </div>
        </div>
    )
}

export default ExamDateEntry;
