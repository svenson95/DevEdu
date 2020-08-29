import React, {useContext, useState} from 'react';
import {IonButton, IonCard, IonContent, IonInput, IonItem, IonLabel, IonPage} from "@ionic/react";
import { useFormik } from "formik";
import {useHistory} from "react-router";
import './Login.scss';

import {LoadContext} from "../../../App";
import AuthService from "../../services/auth.service";
import {AuthContext} from "../../context/auth.context";
import {errorType} from "../../services/http.service";
import {ErrorContext} from "../../components/split-pane/Content";
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
            username: values.name.toLowerCase(),
            password: values.password
        }).then(data => {
            authContext.setUser(data.user);
            authContext.setAuthenticated(data.isAuthenticated);
        }).catch(err => {
            console.log(err);
            errorContext.setMessage(err);
        }).finally(() => loadContext.setLoading(false));
    }

    function submitRegister(values: any) {
        if (values.password.length < 3 || values.name.length < 3) {
            return errorContext.setMessage("Die eingegebenen Daten sind ungültig - Name oder Passwort zu kurz, min. 3 Zeichen");
        }
        if (values.password.length > 15 || values.name.length > 15) {
            return errorContext.setMessage("Die eingegebenen Daten sind ungültig - Name oder Passwort zu lang, max. 15 Zeichen")
        }
        loadContext.setLoading(true);
        AuthService.register({
            name: values.name,
            email: values.email,
            password: values.password,
            role: 'user'
        }).then(res => {
            AuthService.login({
                username: values.name.toLowerCase(),
                password: values.password
            }).then(data => {
                authContext.setAuthenticated(data.isAuthenticated);
                authContext.setUser(data.user);
                history.push('/dashboard');
                errorContext.setMessage("Erfolgreich registriert");
            }).catch(err => {
                errorContext.setMessage("Login fehlgeschlagen " + err);
            }).finally(() => loadContext.setLoading(false));
        }).catch(err => {
            loadContext.setLoading(false);
            errorContext.setMessage(errorType(err))
        });
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
            name: 'test',
            password: 'test'
        },
        onSubmit: values => {
            props.submitLogin(values);
        }
    });

    return (
        <form className="login-signIn" onSubmit={formik.handleSubmit}>
            <h2>Bitte gebe deine Benutzerdaten ein</h2>
            <div className="inputs__wrapper">
                <IonItem className="name-input login-item" lines="none" mode="md">
                    <IonLabel class="login-floating-label" position="floating">Name</IonLabel>
                    <IonInput class="login-input" type="text" id="name" name="name" value={formik.values.name} onInput={formik.handleChange} />
                </IonItem>
                <IonItem className="password-input login-item" lines="none" mode="md">
                    <IonLabel class="login-floating-label" position="floating">Passwort</IonLabel>
                    <IonInput class="login-input" type="password" id="password" name="password" value={formik.values.password} onInput={formik.handleChange} onKeyUp={ev => ev.keyCode === 13 ? formik.handleSubmit() : null} />
                </IonItem>
            </div>
            <div className="button-container">
                {props.load.isLoading ?
                    <LoadingSpinner/>
                    :
                    <>
                        <IonButton className="register-button text-button" fill="outline" mode="md" onClick={() => props.setShowRegister(true)}>
                            <p>Registrieren</p>
                        </IonButton>
                        <IonButton className="login-button text-button" fill="outline" mode="md" type="submit">
                            <p>Log in</p>
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
                <IonItem className="name-input login-item" lines="none" mode="md">
                    <IonLabel class="login-floating-label" position="floating">Name</IonLabel>
                    <IonInput class="login-input" type="text" id="name" name="name" value={formik.values.name} onInput={formik.handleChange} />
                </IonItem>
                <IonItem className="email-input login-item" lines="none" mode="md">
                    <IonLabel class="login-floating-label" position="floating">E-Mail</IonLabel>
                    <IonInput class="login-input" type="email" id="email" name="email" value={formik.values.email} onInput={formik.handleChange} />
                </IonItem>
                <IonItem className="password-input login-item" lines="none" mode="md">
                    <IonLabel class="login-floating-label" position="floating">Passwort</IonLabel>
                    <IonInput class="login-input" type="password" id="password" name="password" value={formik.values.password} onInput={formik.handleChange} onKeyUp={ev => ev.keyCode === 13 ? formik.handleSubmit() : null} />
                </IonItem>
            </div>
            <div className="button-container">
                <IonButton className="register-button text-button" fill={"outline"} mode="md" onClick={() => props.setShowRegister(false)}>
                    <p>Abbrechen</p>
                </IonButton>
                <IonButton className="login-button text-button" fill={"outline"} mode="md" type="submit" disabled={!formik.values.name || !formik.values.email || !formik.values.password}>
                    <p>Bestätigen</p>
                </IonButton>
            </div>
        </form>
    )
};

export default Login;
