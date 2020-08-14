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
                    <div className="header__wrapper">
                        <h1>Kontaktdaten</h1>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Frau Nehls</td>
                                <td>
                                    <a href="mailto:k.nehls@osz-teltow.de">k.nehls@osz-teltow.de</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Frau Fischer</td>
                                <td>
                                    <a href="mailto:r.ritter@osz-teltow.de">r.ritter@osz-teltow.de</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Herr Ritter</td>
                                <td>
                                    <a href="mailto:k.nehls@osz-teltow.de">k.nehls@osz-teltow.de</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Teachers;
