import React from 'react';
import {
    IonCard,
    IonContent,
    IonProgressBar,
} from '@ionic/react';

import './Start.scss';
import Header from "../../Header";

const StartPage = () => {

    return (
        <IonContent>
            <Header/>
            <div className="start__cards">
                <IonCard className="start__card">
                    <h1>Anstehende Klausuren</h1>
                    <h2>01.09.2020 - Lernfeld 6 | Java</h2>
                </IonCard>
                <ProgressBoard/>
            </div>
        </IonContent>
    );
};

const ProgressBoard = () => {
    return (
        <IonCard className="progressBoard__card">
            <h1>Fortschritt</h1>
            <div className="progress__bar__wrapper">
                <IonProgressBar value={0.2} />
            </div>
            <h2>Aktuelle Lektion: <u>Regeln der Netzplantechnik</u></h2>
        </IonCard>
    )
}

export default StartPage;
