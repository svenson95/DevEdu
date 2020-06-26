import React from 'react';
import {
    IonCard,
    IonContent,
    IonList,
    IonPage,
} from '@ionic/react';
import './Home.scss';

const HomePage = () => {
    return (
        <IonPage>
            <IonContent>
                <div className="start__container">
                    <IonCard className="start__card">
                        <IonList>
                            <h1>Grundlagen der IT</h1>
                            <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</h2>
                        </IonList>
                    </IonCard>
                    <IonCard className="start__card">
                        <IonList>
                            <h1>Programmieren lernen</h1>
                            <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</h2>
                        </IonList>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default HomePage;
