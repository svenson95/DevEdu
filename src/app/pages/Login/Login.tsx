import React, {useContext, useState} from 'react';
import {IonButton, IonCard, IonContent, IonInput, IonItem, IonLabel, IonPage} from "@ionic/react";
import Cookies from "js-cookie";
import './Login.scss';

import {AuthContext, LoadContext} from "../../../App";
import AuthService, {errorType} from "../../services/auth.service";
import {ErrorContext} from "../../components/split-pane/Content";
import {useHistory} from "react-router";
import {LoadingSpinner} from "../../components/Spinner";

const Login = ({ ...props }) => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showRegisterInput, setShowRegister] = useState(false);
    const authContext = useContext(AuthContext);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const history = useHistory();

    function submitLogin() {
        console.log("Username: " + name, " | Password: ", password);
        loadContext.setLoading(true);
        AuthService.login({
            username: name,
            password: password
        }).then(data => {
            history.push('/dashboard');
            authContext.setAuthed(data);
        }).catch(err => {
            errorContext.setMessage('Die eingegebenen Daten sind nicht korrekt');
        }).finally(() => loadContext.setLoading(false));
    }

    function submitRegister() {
        loadContext.setLoading(true);
        AuthService.register({
            name: name,
            email: email,
            password: password,
            role: 'user'
        }).then(res => {
            if (res.status === 201) {
                console.log(name, password);
                AuthService.login({
                    username: name,
                    password: password
                }).then(async data => {
                    authContext.setAuthed(data);
                    errorContext.setMessage("Erfolgreich registriert");
                    history.push('/dashboard');
                }).catch(err => {
                    errorContext.setMessage("Die eingegebenen Daten sind ungültig (Name/Passwort zu kurz oder lang)")
                }).finally(() => loadContext.setLoading(false));
            } else {
                errorContext.setMessage(errorType(res.status));
                loadContext.setLoading(false);
            }
        }).catch(err => {
            errorContext.setMessage(errorType(err))
        }).finally(() => loadContext.setLoading(false));
    }


    return (
        <IonPage>
            <IonContent>
                <IonCard className="login-card">
                    {!showRegisterInput ?
                        <LoginView
                            load={loadContext}
                            name={name}
                            email={email}
                            password={password}
                            setName={setName}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setShowRegister={setShowRegister}
                            submitLogin={submitLogin}
                        />
                        :
                        <RegisterView
                            load={loadContext}
                            name={name}
                            email={email}
                            password={password}
                            setName={setName}
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
}

const LoginView = ({ ...props }) => {

    return (
        <div className="login-signIn">
            <h2>Bitte gebe deine Benutzerdaten ein</h2>
            <div className="inputs__wrapper">
                <IonItem className="name-input" lines="none">
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput type="text" value={props.name} onIonChange={(e: any) => props.setName(e.detail.value!)} />
                </IonItem>
                <IonItem className="password-input" lines="none">
                    <IonLabel position="floating">Passwort</IonLabel>
                    <IonInput type="password" value={props.password} onIonChange={(e: any) => props.setPassword(e.detail.value!)} />
                </IonItem>
            </div>
            <div className="button-container">
                {props.load.isLoading ?
                    <LoadingSpinner/>
                    :
                    <>
                        <IonButton className="register-button" fill={"outline"} onClick={() => props.setShowRegister(true)}>
                            Registrieren
                        </IonButton>
                        <IonButton className="login-button" fill={"outline"} onClick={() => props.submitLogin()} disabled={!props.name || !props.password}>
                            Log in
                        </IonButton>
                    </>
                }
            </div>
        </div>
    )
};

const RegisterView = ({ ...props }) => {

    return (
        <div className="login-signUp">
            <h2>Erstelle einen neuen Benutzer</h2>
            <div className="inputs__wrapper">
                <IonItem className="name-input" lines="none">
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput type="text" value={props.name} onIonChange={(e: any) => props.setName(e.detail.value!)} />
                </IonItem>
                <IonItem className="email-input" lines="none">
                    <IonLabel position="floating">E-Mail</IonLabel>
                    <IonInput type="email" value={props.email} onIonChange={(e: any) => props.setEmail(e.detail.value!)} />
                </IonItem>
                <IonItem className="password-input" lines="none">
                    <IonLabel position="floating">Passwort</IonLabel>
                    <IonInput type="password" value={props.password} onIonChange={(e: any) => props.setPassword(e.detail.value!)} />
                </IonItem>
            </div>
            <div className="button-container">
                <IonButton className="register-button" fill={"outline"} onClick={() => props.setShowRegister(false)}>
                    Cancel
                </IonButton>
                <IonButton className="login-button" fill={"outline"} onClick={() => props.submitRegister()} disabled={!props.name || !props.password}>
                    Submit
                </IonButton>
            </div>
        </div>
    )
};

export default Login;
