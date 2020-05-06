import React, {useEffect, useState} from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonRouterOutlet,
    IonToolbar
} from "@ionic/react";
import {Redirect, Route, useHistory, useParams} from "react-router";

import './Content.scss';
import Start from "../pages/Start";
import Subject from "../pages/Subject";
import {pages} from "./Menu";

const Content = () => {

    const history = useHistory();

    let pageTitle = (): string => {
        console.log(history);
        const path = history?.location.pathname;
        let pageItem = pages.find((el: any) => el.url.toLowerCase() === path);
        if (path.startsWith("/start")) return "Start";
        return pageItem?.title || "-";
    };

    return (
        <IonPage id="main" >
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <div className="title__wrapper"><h1>{pageTitle()}</h1></div>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonRouterOutlet id="main">
                    <Route exact path="/start" render={() => <Start />} />
                    <Route exact path="/:name" render={() => <Subject />} />
                    <Redirect exact from="/" to="/start" />
                </IonRouterOutlet>
            </IonContent>
        </IonPage>
    );
};

export default Content;
