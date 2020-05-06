import {
    IonCard,
    IonContent,
    IonListHeader,
    IonPage,
} from '@ionic/react';
import React from 'react';
import './Start.scss';

const Start = () => {
    return (
        <IonPage>
            <IonContent>
                <IonCard>
                    <h1>Anstehende Klausuren</h1>
                    <IonListHeader>LF4</IonListHeader>
                    <ul>
                        <li>00.00.0000 - Thema</li>
                    </ul>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Start;
