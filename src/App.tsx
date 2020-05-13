import React, {createContext, useState} from 'react';
import { IonApp, IonSplitPane } from '@ionic/react';
import {IonReactHashRouter} from "@ionic/react-router";

import SideMenu from './components/split-pane/SideMenu';
import Content from "./components/split-pane/Content";

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

export const AuthContext = createContext(null as any);

const App: React.FC = () => {

    const [authed, setAuthed] = useState(localStorage.getItem("isAuthed") || "false");

    return (
        <IonApp>
            <AuthContext.Provider value={{ authed, setAuthed }}>
                <IonReactHashRouter>
                    <IonSplitPane contentId="main">
                        <SideMenu />
                        <Content />
                    </IonSplitPane>
                </IonReactHashRouter>
            </AuthContext.Provider>
        </IonApp>
    );
};

export default App;
