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
import ExamDateEntry from "../../components/ExamDateEntry/ExamDateEntry";

export const MONTHS = [
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

export const WEEKDAYS_SHORT = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

const Exams = ({ ...props }) => {

    const [exams, setExams] = useState(null as any);
    const [date, setDate] = useState(new Date());
    const [showPopover, setShowPopover] = useState(false);
    const [updatedDatabase, setUpdatedDatabase] = useState(false);
    const authContext = useContext(AuthContext);
    const loadContext = useContext(LoadContext);
    const searchPostContext = useContext(SearchPostContext);

    const examDates = exams?.map((el: any) => new Date(el.date));

    useEffect(() => {
        loadContext.setLoading(true);
        fetchExams();
    }, []);

    useEffect(() => {
        if (updatedDatabase) {
            fetchExams();
            setUpdatedDatabase(false);
        }
    }, [updatedDatabase]);

    function fetchExams() {
        DataService.getExamDates()
            .then(exams => {
                setExams(exams);
                loadContext.setLoading(false);
            })
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
                            <IonButton fill="outline" mode="md" onClick={() => setShowPopover(true)}>
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
                                       firstDayOfWeek={1}
                                       weekdaysShort={WEEKDAYS_SHORT}
                            />
                            <div className="tbk-exam-entries">
                                {exams && sorted(exams).map((exam: any, index: number) => sameMonth(exam.date, date) &&
                                    <ExamDateEntry exam={exam} key={index}/>
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
