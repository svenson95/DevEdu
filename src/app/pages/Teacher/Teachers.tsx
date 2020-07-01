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
                <IonCard className="teachers__card">
                    <h1>Lehrer</h1>
                    <h3>Kontaktdaten</h3>
                    <ul>
                        <li>Frau Nehls: k.nehls@osz-teltow.de</li>
                        <li>Frau Fischer: a.fischer@osz-teltow.de</li>
                        <li>Herr Ritter: r.ritter@osz-teltow.de</li>
                    </ul>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Teachers;
