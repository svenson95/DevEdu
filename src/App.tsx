import React, {createContext, useEffect, useState} from 'react';
import {IonApp, IonProgressBar, IonSplitPane} from '@ionic/react';
import {IonReactRouter} from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/app.scss';

import Cookies from "js-cookie";
import SideMenu from './app/components/split-pane/SideMenu';
import Content from "./app/components/split-pane/Content";
import AuthService from "./app/services/auth.service";

export const AuthContext = createContext(null as any);
export const LoadContext = createContext(true as any);

const App: React.FC = () => {

    let cookie = Cookies.get('devedu_token');
    if (cookie) cookie = JSON.parse(cookie);

    const [authed, setAuthed] = useState(cookie);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        AuthService.isAuthenticated().then(res => console.log(res));
    }, []);

    return (
        <IonApp>
            <AuthContext.Provider value={{ authed, setAuthed }}>
                <LoadContext.Provider value={{ isLoading, setLoading }}>
                    <IonReactRouter>
                        <IonSplitPane contentId="main">
                            <SideMenu />
                            <Content />
                        </IonSplitPane>
                        <IonProgressBar
                            className="progressbar"
                            value={1}
                            type={isLoading ? "indeterminate" : "determinate"}
                        />
                    </IonReactRouter>
                </LoadContext.Provider>
            </AuthContext.Provider>
        </IonApp>
    );
};

export default App;
