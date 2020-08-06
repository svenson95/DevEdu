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
import {SearchPostContext} from "../../components/split-pane/Content";

const Profile = () => {
    const authContext = useContext(AuthContext);
    const searchPostContext = useContext(SearchPostContext);

    return (
        <IonPage id="main">
            <IonContent className={searchPostContext.isSearching_mobile ? "mobile-search-content--open" : ""}>
                <IonCard className="profile__card">
                    <div className="header__wrapper">
                        <h1>Benutzerdaten</h1>
                    </div>
                    <IonLabel>Name: {authContext?.user?.name}</IonLabel>
                    <IonLabel>E-Mail: {authContext?.user?.email}</IonLabel>
                    <IonLabel>Gruppe: {authContext?.user?.role}</IonLabel>
                    <IonButton className="change-pw-button" fill="outline" mode="md">
                        Passwort ändern
                    </IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Profile;
