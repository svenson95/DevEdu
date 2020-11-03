import React, {useContext} from "react";
import {
    IonCard,
    IonContent,
    IonPage,
} from "@ionic/react";

import './Teachers.scss';
import {SearchPostContext} from "../../app-common/split-pane/Content";

const Teachers = ({ ...props }) => {
    const searchPostContext = useContext(SearchPostContext);

    return (
        <IonPage id="main">
            <IonContent className={searchPostContext.isSearching_mobile ? "mobile-search-content--open" : ""}>
                <IonCard className="teachers-card">
                    <div className="header__wrapper">
                        <h1>Kontaktdaten</h1>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Frau Nehls</td>
                                <td>
                                    <a href="mailto:k.nehls@osz-teltow.de">k.nehls@osz-teltow.de</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Frau Fischer</td>
                                <td>
                                    <a href="mailto:a.fischer@osz-teltow.de">a.fischer@osz-teltow.de</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Herr Ritter</td>
                                <td>
                                    <a href="mailto:r.ritter@osz-teltow.de">r.ritter@osz-teltow.de</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Teachers;
