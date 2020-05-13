import React from 'react';
import {
    IonCard,
    IonList,
    IonPage,
    IonProgressBar,
} from '@ionic/react';
import './Start.scss';

const StartPage = ({ ...props }) => {

    return (
        <IonPage>
            <div className="start__container">
                <IonCard className="start__card">
                    <IonList>
                        <h1>Anstehende Klausuren</h1>
                        <h2>01.09.2020 - Lernfeld 6 | Java</h2>
                    </IonList>
                </IonCard>
                <ProgressBoard/>
            </div>
        </IonPage>
    );
};

const ProgressBoard = () => {
    return (
        <IonCard className="progressBoard__card">
            <IonList>
                <h1>Fortschritt</h1>
                <div className="progress__bar__wrapper">
                    <IonProgressBar value={0.2} />
                </div>
                <h2>Aktuelle Lektion: <u>Regeln der Netzplantechnik</u></h2>
            </IonList>
        </IonCard>
    )
}

export default StartPage;
