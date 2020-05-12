import React from 'react';
import {
    IonCard,
    IonContent,
    IonList,
    IonPage,
    IonRouterOutlet,
} from "@ionic/react";
import {Redirect, Route} from "react-router";

import './Content.scss';
import {articleData} from "../../data/articleData";
import Header from "../Header";

import Start from "../pages/Start/Start";
import Subject from "../pages/Subject/Subject";
import Article from "../pages/Article/Article";
import Login from "../pages/Login/Login";

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

const Content = () => {

    const articleUrls = articleData.map(el => el.url);

    return (
        <IonPage id="main">
            <Header/>
            <IonContent>
                <IonRouterOutlet id="main" mode="md">
                    <Route path="/login" render={() => <Login/>} />
                    <Route path="/start" render={() => <Start/>} exact />
                    <Route path={subjectPaths} render={props =>
                        <Subject {...props} />
                    } exact />
                    <Route path={articleUrls} render={props => <Article {...props} />} />
                    <Redirect from="/" to="/start" exact />
                    <Route component={NotFound} />
                </IonRouterOutlet>
            </IonContent>
        </IonPage>
    );
};

const NotFound = () =>
    <IonPage>
        <IonContent>
            <IonCard className="notfound__card">
                <IonList>
                    <h1>Seite existiert nicht</h1>
                </IonList>
            </IonCard>
        </IonContent>
    </IonPage>;


export default Content;
