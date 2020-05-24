import React, {createContext, useState} from 'react';
import {
    IonCard,
    IonList,
    IonPage,
    IonRouterOutlet,
    IonToast,
} from "@ionic/react";
import {Redirect, Route} from "react-router";

import './Content.scss';
import {articleData} from "../../data/articleData";
import Header from "../Header";

import Start from "../pages/Start/Start";
import SubjectsPage from "../pages/Subjects/Subjects";
import Post from "../pages/Post/Post";
import Login from "../pages/Login/Login";
import CreatePost from "../pages/CreatePost/CreatePost";

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

export const LoadContext = createContext(true as any);

const Content = () => {

    const [isLoading, setLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const articleUrls = articleData.map(el => el.url);

    return (
        <IonPage id="main">
            <LoadContext.Provider value={{isLoading, setLoading}}>
                <Header setShowToast={setShowToast} />
                <IonRouterOutlet id="main" mode="md">
                    <Route path="/login" render={() => <Login/>} exact />
                    <Route path="/start" render={() => <Start/>} exact />
                    <Route path={subjectPaths} render={props => <SubjectsPage {...props} />} exact />
                    <Route path={"/lf-1/createPost"} render={props => <CreatePost {...props} />} exact />
                    <Route path={articleUrls} render={props => <Post {...props} />} exact />
                    <Redirect from="/" to="/start" exact />
                    <Route component={NotFound} />
                </IonRouterOutlet>
                <IonToast
                    cssClass="log__toast"
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message="Ausgeloggt"
                    duration={2000}
                />
            </LoadContext.Provider>
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
