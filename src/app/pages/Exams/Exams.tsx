import React, {useContext, useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
} from "@ionic/react";
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';


import './Exams.scss';
import {add} from "ionicons/icons";
import {AuthContext} from "../../context/auth.context";
import {SearchPostContext} from "../../components/split-pane/Content";
import DataService from "../../services/data.service";
import {LoadContext} from "../../../App";
import {LoadingSpinner} from "../../components/Spinner";

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
    const [showDateInput, setShowDateInput] = useState(false);
    const [newDate, setNewDate] = useState(new Date());
    const [newSubject, setNewSubject] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const authContext = useContext(AuthContext);
    const loadContext = useContext(LoadContext);
    const searchPostContext = useContext(SearchPostContext);

    const examDates = exams?.map((el: any) => el.date);

    useEffect(() => {
        loadContext.setLoading(true);
        DataService.getExamDates()
            .then(exams => {
                exams.forEach((exam: any) => {
                   exam.date = new Date(exam.date);
                });
                setExams(exams);
                loadContext.setLoading(false);
            })
    }, []);

    return (
        <IonPage id="main">
            <IonContent className={searchPostContext.isSearching_mobile ? "mobile-search-content--open" : ""}>
                <IonCard className="exams-card">
                    <div className="header__wrapper">
                        <h1>Termine</h1>
                        {authContext?.user?.role === "admin" &&
                            <div className="add-date-container">
                                <IonButton fill="outline" onClick={() => showDateInput ? setShowDateInput(false) : setShowDateInput(true)}>
                                    <IonIcon slot="start" icon={add}/>
                                </IonButton>
                                {showDateInput &&
                                    <div className="input-elements">
                                        <DayPickerInput onDayChange={setNewDate}/>
                                        <IonItem className="subject-input" lines="none">
                                            <IonLabel position="floating">Fach</IonLabel>
                                            <IonInput type="text" id="subject" name="subject" value={newSubject} onInput={event => {
                                                setNewSubject(event.currentTarget.value as string)
                                            }}/>
                                        </IonItem>
                                        <IonItem className="title-input" lines="none">
                                            <IonLabel position="floating">Thema</IonLabel>
                                            <IonInput type="text" id="title" name="title" value={newTitle} onInput={event => {
                                                setNewTitle(event.currentTarget.value as string)
                                            }}/>
                                        </IonItem>
                                        <IonButton className="submit-button" fill="outline" onClick={() => console.log({
                                            newDate: newDate,
                                            newSubject: newSubject,
                                            newTitle: newTitle
                                        })}>
                                            Bestätigen
                                        </IonButton>
                                    </div>
                                }
                            </div>
                        }
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
                                            <span className="exam">{exam.subject.toUpperCase()} - {exam.title}</span>
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
