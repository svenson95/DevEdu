import {
    IonCard,
    IonContent, IonList,
    IonListHeader,
    IonPage,
} from '@ionic/react';
import React from 'react';
import './Start.scss';

const Start = () => {
    return (
        <IonPage>
            <IonContent>
                <IonCard className="start__card">
                    <IonList>
                        <h1>Anstehende Klausuren</h1>
                        <IonListHeader>Lernfeld 6</IonListHeader>
                        <ul>
                            <li>01.09.2020 - Java</li>
                        </ul>
                    </IonList>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Start;
