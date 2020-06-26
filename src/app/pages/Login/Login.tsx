import React, {useContext, useState} from 'react';
import {IonButton, IonCard, IonContent, IonInput, IonItem, IonLabel, IonPage} from "@ionic/react";

import './Login.scss';
import {AuthContext} from "../../../App";
import AuthService from "../../services/auth.service";
import {ErrorContext} from "../../components/split-pane/Content";

const Login = ({ ...props }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showRegisterInput, setShowRegister] = useState(false);
    const authContext = useContext(AuthContext);
    const errorContext = useContext(ErrorContext);

    function submitLogin() {
        console.log("Username: " + email, " | Password: ", password);
        AuthService.login({
            username: email,
            password: password
        }).then(async res => {
            const data = await res.json();
            localStorage.setItem("auth_token", JSON.stringify(data));
            errorContext.setMessage("Eingeloggt");
            authContext.setAuthed(data);
            console.log(data);
        }).catch(err => {
            errorContext.setMessage("Login failed");
            console.log(err);
        });
    }

    function submitRegister() {
        console.log("Username: " + email, " | Password: ", password);
        AuthService.register({
            username: email,
            password: password,
            role: 'user'
        }).then(res => {
            console.log(res);
            if (res.status === 201) {
                AuthService.login({
                    username: email,
                    password: password
                }).then(async res => {
                    const data = await res.json();
                    localStorage.setItem("auth_token", JSON.stringify(data));
                    authContext.setAuthed(data);
                    errorContext.setMessage("Erfolgreich registriert");
                    console.log(data);
                }).catch(err => {
                    errorContext.setMessage("Login failed");
                    console.log(err);
                });
            } else {
                errorContext.setMessage(res.statusText)
            }
        });
    }

    return (
        <IonPage>
            <IonContent>
                <IonCard className="login-card">
                {!showRegisterInput ?
                    <LoginView
                        email={email}
                        password={password}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setShowRegister={setShowRegister}
                        submitLogin={submitLogin}
                    />
                    :
                    <RegisterView
                        email={email}
                        password={password}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setShowRegister={setShowRegister}
                        submitRegister={submitRegister}
                    />
                }
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

const LoginView = ({ ...props }) => {
    return (
        <>
            <h2>Sign in to see more content</h2>
            <div className="inputs__wrapper">
                <IonItem className="email-input" lines="none">
                    <IonLabel position="floating">E-Mail</IonLabel>
                    <IonInput type="email" value={props.email} onIonChange={(e: any) => props.setEmail(e.detail.value!)} />
                </IonItem>
                <IonItem className="password-input" lines="none">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type="password" value={props.password} onIonChange={(e: any) => props.setPassword(e.detail.value!)} />
                </IonItem>
            </div>
            <div className="button-container">
                <IonButton className="register-button" fill={"outline"} onClick={() => props.setShowRegister(true)}>
                    Register
                </IonButton>
                <IonButton className="login-button" fill={"outline"} routerLink="/start" onClick={() => props.submitLogin()} disabled={!props.email || !props.password}>
                    Login
                </IonButton>
            </div>
        </>
    )
};

const RegisterView = ({ ...props }) => {
    return (
        <>
            <h2>Setup your new account</h2>
            <div className="inputs__wrapper">
                <IonItem className="email-input" lines="none">
                    <IonLabel position="floating">E-Mail</IonLabel>
                    <IonInput type="email" value={props.email} onIonChange={(e: any) => props.setEmail(e.detail.value!)} />
                </IonItem>
                <IonItem className="password-input" lines="none">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type="password" value={props.password} onIonChange={(e: any) => props.setPassword(e.detail.value!)} />
                </IonItem>
            </div>
            <div className="button-container">
                <IonButton className="register-button" fill={"outline"} onClick={() => props.setShowRegister(false)}>
                    Cancel
                </IonButton>
                <IonButton className="login-button" fill={"outline"} onClick={() => props.submitRegister()} disabled={!props.email || !props.password}>
                    Submit
                </IonButton>
            </div>
        </>
    )
};

export default Login;
