import React, {useContext} from 'react';
import {
    IonCard,
    IonContent,
    IonList,
    IonPage,
    IonProgressBar
} from '@ionic/react';
import './Dashboard.scss';
import {AuthContext} from "../../../App";

const DashboardPage = () => {

    const authContext = useContext(AuthContext);

    return (
        <IonPage>
            <IonContent>
                <div className="dashboard__container">
                    {authContext.authed?.isAuthenticated &&
                        <IonCard className="start__card">
                            <IonList>
                                <h1>Hallo {authContext.authed.user.username}</h1>
                            </IonList>
                        </IonCard>
                    }
                    <IonCard className="start__card">
                        <IonList>
                            <h1>Anstehende Klausuren</h1>
                            <h2>01.09.2020 - Lernfeld 6 | Java</h2>
                        </IonList>
                    </IonCard>
                    <ProgressBoard/>
                </div>
            </IonContent>
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

export default DashboardPage;
