import React, {createContext, useState} from 'react';
import {IonApp, IonProgressBar, IonSplitPane} from '@ionic/react';
import {IonReactRouter} from "@ionic/react-router";

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

export const AuthContext = createContext(false as any);
export const LoadContext = createContext(true as any);

const App: React.FC = () => {

    const [authed, setAuthed] = useState(localStorage.getItem("isAuthed") || "false");
    const [isLoading, setLoading] = useState(false);

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
                            className="article__progressbar"
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
