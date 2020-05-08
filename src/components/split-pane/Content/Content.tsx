import React from 'react';
import { Redirect, Route, Switch } from "react-router";
import { IonContent, IonPage } from "@ionic/react";

import './Content.scss';
import StartPage from "../../pages/Start/Start";
import SubjectPage from "../../pages/Subject/Subject";
import Header from "../../Header";

const subjectPaths = [
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
    return (
        <IonPage id="main">
            <IonContent>
                <Switch>
                    <Route path="/start" component={StartPage} exact />
                    <Route path={subjectPaths} render={props => <SubjectPage {...props} />} exact />
                    <Redirect from="/" to="/start" exact />
                </Switch>
            </IonContent>
        </IonPage>
    );
};

export default Content;
