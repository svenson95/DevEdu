import React, {useContext, useState} from 'react';
import {IonButton, IonCard, IonContent, IonInput, IonItem, IonLabel, IonPage} from "@ionic/react";

import './Login.scss';
import {AuthContext} from "../../../App";

const Login = ({ ...props }) => {

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const authContext = useContext(AuthContext);

    function submitLogin() {
        console.log("Username: " + userName, " | Password: ", password);
        localStorage.setItem("isAuthed", "true");
        authContext.setAuthed("true");
    }

    return (
        <IonPage>
            <IonContent>
                <IonCard className="login__container">
                    <div className="inputs__wrapper">
                        <IonItem className="email__input">
                            <IonLabel position="floating">E-Mail</IonLabel>
                            <IonInput type="email" value={userName} onIonChange={(e: any) => setUserName(e.detail.value!)} />
                        </IonItem>
                        <IonItem className="password__input">
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput type="password" value={password} onIonChange={(e: any) => setPassword(e.detail.value!)} />
                        </IonItem>
                    </div>
                    <IonButton
                        className="login__button"
                        onClick={() => {
                            submitLogin();
                            props.setMessage("Eingeloggt");
                        }}
                        fill={"outline"}
                        routerLink="/start"
                    >
                        Login
                    </IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
