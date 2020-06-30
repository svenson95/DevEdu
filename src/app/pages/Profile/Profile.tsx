import React, {useContext} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonLabel,
    IonPage,
} from "@ionic/react";

import './Profile.scss';
import {AuthContext} from "../../../App";

const Profile = ({ ...props }) => {
    const authContext = useContext(AuthContext);
    console.log(authContext.authed);

    return (
        <IonPage id="main">
            <IonContent>
                <IonCard className="profile__card">
                    <h1>Benutzerdaten</h1>
                    <IonLabel>Name: {authContext.authed?.user.name}</IonLabel>
                    <IonLabel>E-Mail: {authContext.authed?.user.email}</IonLabel>
                    <IonLabel>Rolle: {authContext.authed?.user.role}</IonLabel>
                    <IonButton className="change-pw-button" fill="outline">
                        Passwort ändern
                    </IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Profile;
