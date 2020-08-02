import React, {useContext} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonLabel,
    IonPage,
} from "@ionic/react";
import './Profile.scss';

import {AuthContext} from "../../context/auth.context";

const Profile = ({ ...props }) => {
    const authContext = useContext(AuthContext);

    return (
        <IonPage id="main">
            <IonContent>
                <IonCard className="profile__card">
                    <div className="header__wrapper">
                        <h1>Benutzerdaten</h1>
                    </div>
                    <IonLabel>Name: {authContext?.user?.name}</IonLabel>
                    <IonLabel>E-Mail: {authContext?.user?.email}</IonLabel>
                    <IonLabel>Rolle: {authContext?.user?.role}</IonLabel>
                    <IonButton className="change-pw-button" fill="outline">
                        Passwort ändern
                    </IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Profile;
