import React, {useContext, useState} from 'react';
import {IonButton, IonCard, IonContent, IonInput, IonItem, IonLabel, IonPage} from "@ionic/react";
import { useFormik } from "formik";
import './Login.scss';

import {AuthContext, LoadContext} from "../../../App";
import AuthService, {errorType} from "../../services/auth.service";
import {ErrorContext} from "../../components/split-pane/Content";
import {useHistory} from "react-router";
import {LoadingSpinner} from "../../components/Spinner";

const Login = () => {

    const [showRegisterInput, setShowRegister] = useState(false);
    const authContext = useContext(AuthContext);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const history = useHistory();

    function submitLogin(values: any) {
        loadContext.setLoading(true);
        AuthService.login({
            username: values.name,
            password: values.password
        }).then(data => {
            history.push('/dashboard');
            authContext.setAuthed(data);
        }).catch(err => {
            errorContext.setMessage('Die eingegebenen Daten sind nicht korrekt');
        }).finally(() => loadContext.setLoading(false));
    }

    function submitRegister(values: any) {
        loadContext.setLoading(true);
        AuthService.register({
            name: values.name,
            email: values.email,
            password: values.password,
            role: 'user'
        }).then(res => {
            if (res.status === 201) {
                AuthService.login({
                    username: values.name,
                    password: values.password
                }).then(async data => {
                    authContext.setAuthed(data);
                    errorContext.setMessage("Erfolgreich registriert");
                    history.push('/dashboard');
                }).catch(err => {
                    errorContext.setMessage("Die eingegebenen Daten sind ungültig (Name/Passwort zu kurz oder lang)")
                }).finally(() => loadContext.setLoading(false));
            } else {
                errorContext.setMessage("Login hat nicht funktioniert, probiere es erneut");
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
                            setShowRegister={setShowRegister}
                            submitLogin={submitLogin}
                        />
                        :
                        <RegisterView
                            load={loadContext}
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
    const formik = useFormik({
        initialValues: {
            name: '',
            password: ''
        },
        onSubmit: values => {
            props.submitLogin(values);
        }
    });

    return (
        <form className="login-signIn" onSubmit={formik.handleSubmit}>
            <h2>Bitte gebe deine Benutzerdaten ein</h2>
            <div className="inputs__wrapper">
                <IonItem className="name-input" lines="none">
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput type="text" id="name" name="name" value={formik.values.name} onInput={formik.handleChange} />
                </IonItem>
                <IonItem className="password-input" lines="none">
                    <IonLabel position="floating">Passwort</IonLabel>
                    <IonInput type="password" id="password" name="password" value={formik.values.password} onInput={formik.handleChange} />
                </IonItem>
            </div>
            <div className="button-container">
                {props.load.isLoading ?
                    <LoadingSpinner/>
                    :
                    <>
                        <IonButton className="register-button" fill="outline" onClick={() => props.setShowRegister(true)}>
                            Registrieren
                        </IonButton>
                        <IonButton className="login-button" fill="outline" type="submit">
                            Log in
                        </IonButton>
                    </>
                }
            </div>
        </form>
    )
};

const RegisterView = ({ ...props }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            props.submitRegister(values);
            console.log('Submited form ', values)
        }
    });

    return (
        <form className="login-signUp" onSubmit={formik.handleSubmit}>
            <h2>Erstelle einen neuen Benutzer</h2>
            <div className="inputs__wrapper">
                <IonItem className="name-input" lines="none">
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput type="text" id="name" name="name" value={formik.values.name} onInput={formik.handleChange} />
                </IonItem>
                <IonItem className="email-input" lines="none">
                    <IonLabel position="floating">E-Mail</IonLabel>
                    <IonInput type="email" id="email" name="email" value={formik.values.email} onInput={formik.handleChange} />
                </IonItem>
                <IonItem className="password-input" lines="none">
                    <IonLabel position="floating">Passwort</IonLabel>
                    <IonInput type="password" id="password" name="password" value={formik.values.password} onInput={formik.handleChange} />
                </IonItem>
            </div>
            <div className="button-container">
                <IonButton className="register-button" fill={"outline"} onClick={() => props.setShowRegister(false)}>
                    Cancel
                </IonButton>
                <IonButton className="login-button" fill={"outline"} type="submit" disabled={!formik.values.name || !formik.values.email || !formik.values.password}>
                    Submit
                </IonButton>
            </div>
        </form>
    )
};

export default Login;
