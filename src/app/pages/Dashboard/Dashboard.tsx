import React, {useContext, useEffect, useState} from 'react';
import {
    IonCard,
    IonContent,
    IonList,
    IonPage,
    IonProgressBar
} from '@ionic/react';
import './Dashboard.scss';
import DataService from "../../services/data.service";
import {ErrorContext} from "../../components/split-pane/Content";
import {LoadContext} from "../../../App";
import {AuthContext} from "../../context/auth.context";

const DashboardPage = () => {

    return (
        <IonPage>
            <IonContent>
                <div className="dashboard__container">
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

    const [unitsCount, setUnitsCount] = useState(0);
    const [unitsDoneInPercentage, setUnitsPercentage] = useState(0);
    const loadContext = useContext(LoadContext);
    const authContext = useContext(AuthContext);
    const errorContext = useContext(ErrorContext);

    useEffect(() => {
        loadContext.setLoading(true);
        DataService.getMaxProgress()
            .then(subjects => {
                let allUnitsLength = 0;
                subjects.forEach((subject: any) => allUnitsLength += subject.posts.length);
                setUnitsCount(allUnitsLength);
                setUnitsPercentage(authContext?.user?.progress.length / allUnitsLength);
            })
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));
    }, []);

    return (
        <IonCard className="progressBoard__card">
            <IonList>
                <h1>Fortschritt</h1>
                <h2>Lektion {authContext?.user?.progress.length} von {unitsCount ? unitsCount : "..."}</h2>
                <div className="progress__bar__wrapper">
                    <IonProgressBar value={unitsDoneInPercentage} />
                </div>
                <h2>Aktuelle Lektion: <u>Regeln der Netzplantechnik</u></h2>
            </IonList>
        </IonCard>
    )
};

export default DashboardPage;
