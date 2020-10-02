import React, {useContext, useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonIcon,
    IonPage,
} from "@ionic/react";
import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css';


import './Exams.scss';
import {add} from "ionicons/icons";
import {AuthContext} from "../../context/auth.context";
import {SearchPostContext} from "../../components/split-pane/Content";
import DataService from "../../services/data.service";
import {LoadContext} from "../../../App";
import {LoadingSpinner} from "../../components/Spinner";
import PopoverAddExam from "../../components/Popover-AddExam/Popover-AddExam";
import {subjects} from "../../../data/menuTitles";

const MONTHS = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

const WEEKDAYS_SHORT = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const Exams = ({ ...props }) => {

    const [exams, setExams] = useState(null as any);
    const [date, setDate] = useState(new Date());
    const [showPopover, setShowPopover] = useState(false);
    const [updatedDatabase, setUpdatedDatabase] = useState(false);
    const authContext = useContext(AuthContext);
    const loadContext = useContext(LoadContext);
    const searchPostContext = useContext(SearchPostContext);

    const examDates = exams?.map((el: any) => el.date);

    useEffect(() => {
        loadContext.setLoading(true);
        fetchExams();
    }, []);

    useEffect(() => {
        fetchExams();
    }, [updatedDatabase]);

    function fetchExams() {
        DataService.getExamDates()
            .then(exams => {
                exams.forEach((exam: any) => {
                    exam.date = new Date(exam.date);
                });
                setExams(exams);
                loadContext.setLoading(false);
            })
    }

    function findSubjectTitle(subjectUrl: string) {
        return subjects.find(subject => subject.url.substring(1) === subjectUrl)?.title || 'not found subject';
    }

    return (
        <IonPage id="main">
            <PopoverAddExam
                setUpdatedDatabase={setUpdatedDatabase}
                showPopover={showPopover}
                setShowPopover={setShowPopover}
            />
            <IonContent className={searchPostContext.isSearching_mobile ? "mobile-search-content--open" : ""}>
                <IonCard className="exams-card">
                    <div className="header__wrapper">
                        <h1>Termine</h1>
                        {authContext?.user?.role === "admin" && <>
                            <IonButton fill="outline" onClick={() => setShowPopover(true)}>
                                <IonIcon slot="start" icon={add}/>
                            </IonButton>
                        </>}
                    </div>
                    {loadContext.isLoading ?
                        <LoadingSpinner/>
                        :
                        <div className="dates-container">
                            <DayPicker showWeekNumbers
                                       initialMonth={date}
                                       selectedDays={examDates}
                                       onMonthChange={setDate}
                                       locale="de"
                                       months={MONTHS}
                                       weekdaysShort={WEEKDAYS_SHORT}
                            />
                            <div className="date-entries">
                                {exams && exams.map((exam: any, index: number) =>
                                    <div className="month-dates" key={index}>
                                        {exam.date.getMonth() === date.getMonth() &&
                                        <h2 className="ddu-exam" key={index}>
                                            <span className="date">{exam.date.getDate()}.{exam.date.getMonth()+1}.{exam.date.getFullYear()}</span>
                                            <span className="exam">{findSubjectTitle(exam.subject)} - {exam.title}</span>
                                        </h2>
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Exams;
