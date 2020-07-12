import React from "react";
import {
    IonCard,
    IonContent,
    IonPage,
} from "@ionic/react";

import './Exams.scss';

const Exams = ({ ...props }) => {
    return (
        <IonPage id="main">
            <IonContent>
                <IonCard className="exams-card">
                    <h1>Termine</h1>
                    <h3>01.09.2020 - Lernfeld 6 | Entwickeln und Bereitstellen von Anwendungssystemen</h3>
                    <span><hr/></span>
                    <h3>11.09.2020 - Lernfeld 4-1 | Einfache IT-Systeme</h3>
                    <span><hr/></span>
                    <h3>22.09.2020 - WiSo | Versicherungen & Sozialabgaben</h3>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Exams;
