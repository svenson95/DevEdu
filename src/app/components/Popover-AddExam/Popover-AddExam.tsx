import React, {useContext, useState} from "react";
import {
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonPopover,
} from "@ionic/react";
import './Popover-AddExam.scss';

import {LoadContext} from "../../../App";
import {ErrorContext} from "../split-pane/Content";
import DataService from "../../services/data.service";

const PopoverAddExam = ({ ...props }) => {

    const [date, setDate] = useState(null as any);
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

        await DataService.addNewExam(newExam)
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

    return (
        <IonPopover
            isOpen={props.showPopover}
            cssClass="ddu-add-exam-popover"
            onDidDismiss={() => props.setShowPopover(false)}
            mode="md"
        >
            <div className="ddu-add-exam-container">
                <IonItem className="ddu-date-input">
                    <IonLabel position="floating">Datum</IonLabel>
                    <IonInput
                        value={date}
                        onIonChange={e => setDate(e.detail.value!)}
                    />
                </IonItem>
                <IonItem className="ddu-subject-input">
                    <IonLabel position="floating">Fach</IonLabel>
                    <IonInput
                        value={subject}
                        onIonChange={e => setSubject(e.detail.value!)}
                    />
                </IonItem>
                <IonItem className="ddu-title-input">
                    <IonLabel position="floating">Titel</IonLabel>
                    <IonInput
                        value={title}
                        onIonChange={e => setTitle(e.detail.value! || null)}
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
