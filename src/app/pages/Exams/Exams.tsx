import React, {useContext, useState} from "react";
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

const examDates = [
    {
        "date": new Date(2020, 8, 1),
        "subject": "Lernfeld 6",
        "title": "Entwickeln und Bereitstellen von Anwendungssystemen"
    },
    {
        "date": new Date(2020, 8, 11),
        "subject": "Lernfeld 4-1",
        "title": "Einfache IT-Systeme"
    },
    {
        "date": new Date(2020, 8, 22),
        "subject": "WiSo",
        "title": "Versicherungen & Sozialabgaben"
    }
];

const Exams = ({ ...props }) => {
    const [date, setDate] = useState(new Date());
    const [showDateInput, setShowDateInput] = useState(false);
    const [newDate, setNewDate] = useState(new Date());
    const [newSubject, setNewSubject] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const authContext = useContext(AuthContext);

    return (
        <IonPage id="main">
            <IonContent>
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
                    <div className="dates-container">
                        <DayPicker showWeekNumbers
                                   initialMonth={date}
                                   selectedDays={[
                                       examDates[0].date,
                                       examDates[1].date,
                                       examDates[2].date
                                   ]}
                                   onMonthChange={setDate}
                        />
                        <div className="date-entries">
                            {examDates.map((el: any, index: number) =>
                                <div className="month-dates" key={index}>
                                    {el.date.getMonth() === date.getMonth() && <>
                                        <h3>{el.date.getDate()}.{el.date.getMonth()+1}.{el.date.getFullYear()} - {el.subject} | {el.title}</h3>
                                    </>}
                                </div>
                            )}
                        </div>
                    </div>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Exams;
