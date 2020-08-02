import React, {createContext, useState} from 'react';
import {
    IonPage,
    IonToast,
} from "@ionic/react";
import './Content.scss';

import Header from "../Header";
import {Router} from "../Router";

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

    return (
        <IonPage id="main">
            <ErrorContext.Provider value={{ message, setMessage }}>
                <Header setMessage={setMessage} />
                <SelectedPostContext.Provider value={{ postId, setPostId }}>
                    <Router/>
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

export default Content;
