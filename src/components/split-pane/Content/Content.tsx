import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {IonCard, IonContent, IonPage} from "@ionic/react";

import './Content.scss';
import StartPage from "../../pages/StartPage/Start";
import SubjectPage from "../../pages/SubjectPage/Subject";
import Header from "../../Header";
import Article from "../../pages/ArticlePage/Article";
import {articleData} from "../../../data/articleData";

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
            <IonContent>
                <Header/>
                <Switch>
                    <Route path="/start" component={StartPage} exact />
                    <Route path={subjectPaths} component={SubjectPage} exact />
                    <Route path={articleUrls} component={Article} />
                    <Redirect from="/" to="/start" exact />
                    <Route component={NotFound} />
                </Switch>
            </IonContent>
        </IonPage>
    );
};

const NotFound = () => <IonCard className="start__card"><h2>Seite existiert nicht</h2></IonCard>;

export default Content;
