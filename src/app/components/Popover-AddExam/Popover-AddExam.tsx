import React, {useContext, useState} from "react";
import {
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonPopover,
    IonSelect,
    IonSelectOption,
} from "@ionic/react";
import './Popover-AddExam.scss';

import {LoadContext} from "../../../App";
import {ErrorContext} from "../split-pane/Content";
import DataService from "../../services/data.service";
import DayPickerInput from "react-day-picker/DayPickerInput";
import {MONTHS, WEEKDAYS_SHORT} from "../../pages/Exams/Exams";
import {subjects} from "../../../data/menuTitles";

const PopoverAddExam = ({ ...props }) => {

    const [date, setDate] = useState(null as any);
    const [localizedDate, setLocalizedDate] = useState(null as any);
    const [subject, setSubject] = useState(null as any);
    const [title, setTitle] = useState(null as any);

    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);

    async function patchObjectInDatabase() {

        let newExam = {
            "date": date,
            "subject": subject.toLowerCase(),
            "title": title
        };

        // TODO: response should return (updated) all exams then props.setExams()
        await DataService.postNewExam(newExam)
            .then(async res => {
                console.log(res);
                props.setUpdatedDatabase(true);
            })
            .catch(error => {
                console.log(error);
                errorContext.setMessage(error);
            });
        return newExam;
    }

    async function confirmChanges() {
        loadContext.setLoading(true);
        await patchObjectInDatabase();
        loadContext.setLoading(false);
        props.setShowPopover(false);
    }

    function getDateString(date: Date, localized?: boolean) {
        const year = date.getFullYear();
        let month: string | number = date.getMonth() + 1;
        let day: string | number = date.getDate();

        if (month <= 9) {
            month = '0' + month;
        }

        if (day <= 9) {
            day = '0' + day;
        }

        if (localized) {
            return day + "." + month + "." + year;
        }

        return year + "-" + month + "-" + day;
    }

    return (
        <IonPopover
            isOpen={props.showPopover}
            cssClass="ddu-add-exam-popover"
            onDidDismiss={() => {
                props.setShowPopover(false);
                setDate(null);
                setLocalizedDate(null);
                setSubject(null);
                setTitle(null);
            }}
            mode="md"
        >
            <div className="ddu-add-exam-container">
                <IonItem className="ddu-date-input">
                    <IonLabel position="floating">Datum</IonLabel>
                    <DayPickerInput
                        onDayChange={day => {
                            setDate(getDateString(day));
                            setLocalizedDate(getDateString(day, true));
                        }}
                        dayPickerProps={{
                            months: MONTHS,
                            weekdaysShort: WEEKDAYS_SHORT
                        }}
                        component={React.forwardRef((props, ref) =>
                                <IonInput value={localizedDate} readonly {...props} placeholder={undefined} />
                        )}
                    />
                </IonItem>
                <IonItem className="ddu-subject-input">
                    <IonLabel position="floating">Fach</IonLabel>
                    <IonSelect value={subject} interface="popover" onIonChange={(e: any) => setSubject(e.detail.value)}>
                        {subjects.map((subject: any, index: number) =>
                            <IonSelectOption value={subject.url.substring(1)} key={index}>
                                {subject.title}
                            </IonSelectOption>
                        )}
                    </IonSelect>
                </IonItem>
                <IonItem className="ddu-title-input">
                    <IonLabel position="floating">Titel</IonLabel>
                    <IonInput
                        value={title}
                        onIonChange={e => setTitle(e.detail.value)}
                    />
                </IonItem>
                <IonButton
                    fill="outline"
                    onClick={confirmChanges}
                >
                    Hinzufügen
                </IonButton>
            </div>
        </IonPopover>
    )
};

export default PopoverAddExam;
