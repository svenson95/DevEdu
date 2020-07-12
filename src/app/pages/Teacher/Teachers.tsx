import React from "react";
import {
    IonCard,
    IonContent,
    IonPage,
} from "@ionic/react";

import './Teachers.scss';

const Teachers = ({ ...props }) => {
    return (
        <IonPage id="main">
            <IonContent>
                <IonCard className="teachers-card">
                    <h1>Kontaktdaten</h1>
                    <ul>
                        <li>Frau Nehls: <a href="mailto:k.nehls@osz-teltow.de">k.nehls@osz-teltow.de</a></li>
                        <li>Frau Fischer: <a href="mailto:a.fischer@osz-teltow.de">a.fischer@osz-teltow.de</a></li>
                        <li>Herr Ritter: <a href="mailto:r.ritter@osz-teltow.de">r.ritter@osz-teltow.de</a></li>
                    </ul>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Teachers;
