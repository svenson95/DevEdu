import React, {useContext} from 'react';
import {
    IonCard,
    IonContent,
    IonList,
    IonPage,
    IonProgressBar
} from '@ionic/react';
import './Dashboard.scss';
import {AuthContext} from "../../context/auth.context";

const DashboardPage = () => {

    const authContext = useContext(AuthContext);

    function titleCase(str: string | undefined) {
        if(!str) return;
        let splitStr = str!.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    return (
        <IonPage>
            <IonContent>
                <div className="dashboard__container">
                    {authContext.isAuthenticated &&
                        <IonCard className="start__card">
                            <IonList>
                                <h1>Hallo {titleCase(authContext?.user?.name)}</h1>
                            </IonList>
                        </IonCard>
                    }
                    <IonCard className="start__card">
                        <IonList>
                            <h1>Nächste Klausur</h1>
                            <h2>01.09.2020 - Lernfeld 6 | Entwickeln und Bereitstellen von Anwendungssystemen</h2>
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
};

export default DashboardPage;
