import React, {createContext, useState} from 'react';
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

import SideMenu from './app/app-common/split-pane/SideMenu';
import Content from "./app/app-common/split-pane/Content";

export const LoadContext = createContext(true as any);

const App: React.FC = () => {

    const [isLoading, setLoading] = useState(false);

    return (
        <IonApp>
            <LoadContext.Provider value={{ isLoading, setLoading }}>
                <IonReactRouter>
                    <IonProgressBar
                        className="tbk-header-bar"
                        value={1}
                        type={isLoading ? "indeterminate" : "determinate"}
                    />
                    <div className="tbk-scroll-bar-container">
                        <div className="tbk-scroll-bar" id="scroll-progress-bar"/>
                    </div>
                    <IonSplitPane contentId="main">
                        <SideMenu />
                        <Content />
                    </IonSplitPane>
                </IonReactRouter>
            </LoadContext.Provider>
        </IonApp>
    );
};

export default App;
