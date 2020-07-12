import React from "react";
import {
    IonCard,
    IonContent,
    IonPage,
} from "@ionic/react";
import './LearningResources.scss';

const LearningResources = () => {
    return (
        <IonPage id="main">
            <IonContent>
                <IonCard className="learningResources-card">
                    <h1>Dateien</h1>
                    <h4>Alle Dokumente die von den Lehreren bereitgestellt wurden</h4>
                    <ul>
                        Woche 23.03.2020 bis 27.03.2020 | KW 13
                        <li>LF3_Deutsch_Ne & it_projekt_doku</li>
                        <li>LF6_Übung</li>
                        <li>WISO Übung</li>
                        <li>LF1-200325 & Übung 1 & Übung 2</li>
                    </ul>
                    <ul>
                        Woche 24.04.2020 bis 01.05.2020 | KW 18
                        <li>LF4-1_gleichrichtung_von_wechselspannungen</li>
                        <li>LF4-1_halbleiterdioden</li>
                        <li>LF4-1_netzteile</li>
                        <li>LF4-1_schaltnetzteile</li>
                        <li>deutsch_schreibungs_des_s_lautes</li>
                    </ul>
                    <ul>
                        Woche 18.05.2020 bis 22.05.2020 | KW 21
                        <li>LF4-2_11a_Auflösungsberechnung</li>
                        <li>LF4-2_13_flash_speicher</li>
                        <li>LF4-2_14_dateisysteme</li>
                        <li>LF4-2_15_fat</li>
                        <li>LF4-2_18_ergonomie</li>
                        <li>FIA93-WISO-200517</li>
                    </ul>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default LearningResources;
