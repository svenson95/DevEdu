import React, {useContext} from "react";
import {
    IonCard,
    IonContent,
    IonPage,
} from "@ionic/react";
import './LearningResources.scss';
import {SearchPostContext} from "../../app-common/split-pane/Content";

const LearningResources = () => {
    const searchPostContext = useContext(SearchPostContext);
    return (
        <IonPage id="main">
            <IonContent className={searchPostContext.isSearching_mobile ? "mobile-search-content--open" : ""}>
                <IonCard className="learningResources-card">
                    <div className="header__wrapper">
                        <h1>Dateien</h1>
                    </div>
                    <h2>Dokumente und Aufgaben zum Herunterladen</h2>
                    <ul>
                        <h3>Woche 23.03.2020 bis 27.03.2020 | KW 13</h3>
                        <li>LF3_Deutsch_Ne & it_projekt_doku</li>
                        <li>LF6_Übung</li>
                        <li>WISO Übung</li>
                        <li>LF1-200325 & Übung 1 & Übung 2</li>
                    </ul>
                    <ul>
                        <h3>Woche 24.04.2020 bis 01.05.2020 | KW 18</h3>
                        <li>LF4-1_gleichrichtung_von_wechselspannungen</li>
                        <li>LF4-1_halbleiterdioden</li>
                        <li>LF4-1_netzteile</li>
                        <li>LF4-1_schaltnetzteile</li>
                        <li>deutsch_schreibungs_des_s_lautes</li>
                    </ul>
                    <ul>
                        <h3>Woche 18.05.2020 bis 22.05.2020 | KW 21</h3>
                        <li>LF4-2_11a_Auflösungsberechnung</li>
                        <li>LF4-2_13_flash_speicher</li>
                        <li>LF4-2_14_dateisysteme</li>
                        <li>LF4-2_15_fat</li>
                        <li>LF4-2_18_ergonomie</li>
                        <li>FIA93-WISO-200517</li>
                    </ul>
                    <ul>
                        <h3>Woche 08.06.2020 bis 12.06.2020 | KW 24</h3>
                        <li>LF4-3_gantt-npt.pdf</li>
                        <li>LF4-1_17a_PWM - Pulsweitenmodulation</li>
                        <li>LF4-1_18_OPV - Operationsverstärker</li>
                        <li>LF4-1_19_Nichtlineare Bauelemente</li>
                        <li>LF4-1_20_Optoelektronische Bauelemente</li>
                        <li>LF4-1_21_Halbaddierer, Volladdierer, Ripple-Carry-Addierer</li>
                        <li>LF4-1_22_Flip-Flops</li>
                        <li>LF4-1_23_Zähler, Teiler, Kodierer</li>
                        <li>LF4-1_24_Dämpfung und DB-Begriffe</li>
                        <li>LF10-1_11_OSI-Referenzmodell (1)</li>
                        <li>LF10-1_11_OSI-Referenzmodell (2)</li>
                        <li>LF6_MyArray - Eigene Java Bibliothek bauen</li>
                    </ul>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default LearningResources;
