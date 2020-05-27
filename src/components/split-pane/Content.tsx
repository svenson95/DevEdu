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
import {articleData} from "../../data/posts/articleData";
import Header from "../Header";

import Start from "../pages/Start/Start";
import Subject from "../pages/Subject/Subject";
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

    const [showToast, setShowToast] = useState(false as any);
    const articleUrls = articleData.map(el => el.url);

    return (
        <IonPage id="main">
            <Header setShowToast={setShowToast} />
            <IonRouterOutlet id="main" mode="md">
                <Route path="/login" render={() => <Login setShowToast={setShowToast} />} exact />
                <Route path="/start" render={() => <Start/>} exact />
                <Route path={subjectPaths} render={props => <Subject {...props} />} exact />
                <Route path={"/lf-1/createPost"} render={props => <CreatePost {...props} />} exact />
                <Route path={articleUrls} render={props => <Post {...props} />} exact />
                <Redirect from="/" to="/start" exact />
                <Route component={NotFound} />
            </IonRouterOutlet>
            {showToast &&
                <IonToast
                    cssClass="log__toast"
                    isOpen={showToast !== false}
                    onDidDismiss={() => setShowToast(false)}
                    message={showToast}
                    duration={2000}
                    mode="ios"
                />
            }
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
