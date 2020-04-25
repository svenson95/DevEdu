import React, {useState} from 'react';
import './Content.css';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonRouterOutlet,
    IonToolbar
} from "@ionic/react";
import Page from "../../pages/Page";
import {Redirect, Route, Switch} from "react-router";

const Content = () => {

    let [pageTitle, setPageTitle] = useState();

  return (
      <IonPage id="main" >
          <IonHeader>
              <IonToolbar>
                  <IonButtons slot="start">
                      <IonMenuButton />
                  </IonButtons>
                  <div className="title__wrapper"><h1>{pageTitle || "Start"}</h1></div>
              </IonToolbar>
          </IonHeader>

          <IonContent>
              <Switch>
                  <IonRouterOutlet id="main">
                      <Route path={`${process.env.PUBLIC_URL}/:name`} render={() => <Page setPageTitle={setPageTitle}/>} exact />
                      <Redirect from="/" to="/start" exact />
                  </IonRouterOutlet>
              </Switch>
          </IonContent>
      </IonPage>
  );
};

export default Content;
