import React, {createContext, useContext, useState} from 'react';
import {
    IonCard,
    IonList,
    IonPage,
    IonRouterOutlet,
    IonToast,
} from "@ionic/react";
import {Redirect, Route} from "react-router";
import './Content.scss';

import Header from "../Header";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Profile from "../../pages/Profile/Profile";
import { Subject } from "../../pages/Subject/Subject";
import LearningResources from "../../pages/LearningResources/LearningResources";
import Teachers from "../../pages/Teacher/Teachers";
import EditPost from "../../pages/EditPost/EditPost";
import Post from "../../pages/Post/Post";
import {AuthContext} from "../../../App";

export const subjectPaths = [
    "/lf-1",
    "/lf-2",
    "/lf-3",
    "/lf-4-1",
    "/lf-4-2",
    "/lf-5",
    "/lf-6",
    "/wiso",
    "/englisch",
    "/deutsch"
];

export const ErrorContext = createContext(false as any);
export const SelectedPostContext = createContext(null as any);

const Content = () => {

    const [message, setMessage] = useState(false as any);
    const [postId, setPostId] = useState(null as any);
    const articleUrls = subjectPaths.map(el => el + "/:articleTopic/:articleUrl");
    const authContext = useContext(AuthContext);

    return (
        <IonPage id="main">
            <ErrorContext.Provider value={{ message, setMessage }}>
                <Header setMessage={setMessage} />
                <SelectedPostContext.Provider value={{ postId, setPostId }}>
                    <IonRouterOutlet id="main" mode="md">
                        <Route path="/home" render={() => <Home/>} exact />
                        <Route path="/login" render={() => authContext.authed?.isAuthenticated ?
                            <Redirect to="/dashboard" exact /> : <Login/>
                        } exact />
                        <Route path="/dashboard" render={() => authContext.authed?.isAuthenticated ?
                            <Dashboard/> : <Login/>
                        } exact />
                        <Route path="/profile" render={() => authContext.authed?.isAuthenticated ?
                            <Profile/> : <Redirect to="/home" exact />
                        } exact />
                        <Route path={subjectPaths} render={props => <Subject {...props} />} exact />
                        <Route path={articleUrls} render={props => <Post {...props} />} exact />
                        <Route path={"*/edit"} render={props => authContext.authed?.user.role === "admin" ?
                            <EditPost {...props} /> : <Redirect to="/dashboard" exact/>
                        } exact />
                        <Route path="/lehrmaterial" render={() => <LearningResources/>} exact />
                        <Route path="/lehrer" render={props => <Teachers {...props} />} exact />
                        <Redirect from="/" to="/home" exact />
                        <Route component={NotFound} />
                    </IonRouterOutlet>
                </SelectedPostContext.Provider>
                {message &&
                    <IonToast
                        cssClass="log__toast"
                        isOpen={message !== false}
                        onDidDismiss={() => setMessage(false)}
                        message={message}
                        duration={2000}
                        mode="ios"
                    />
                }
            </ErrorContext.Provider>
        </IonPage>
    );
};

const NotFound = () =>
    <IonPage className="notfound__container">
        <IonCard className="notfound__card">
            <IonList>
                <h1>Seite existiert nicht</h1>
            </IonList>
        </IonCard>
    </IonPage>;


export default Content;
