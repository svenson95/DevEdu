import React, {useContext, useEffect, useState} from "react";
import {
    IonCard,
    IonContent,
    IonPage,
} from "@ionic/react";
import './SubstitutionSchedule.scss';

import {SearchPostContext} from "../../components/split-pane/Content";
import DataService from "../../services/data.service";
import {LoadingSpinner} from "../../components/Spinner";
import {LoadContext} from "../../../App";

const SubstitutionSchedule = ({ ...props }) => {

    const [schedule, setSchedule] = useState(null as any);
    const [replacementsToday, setReplacementsToday] = useState(null as any);
    const [replacementsTomorrow, setReplacementsTomorrow] = useState(null as any);
    const searchPostContext = useContext(SearchPostContext);
    const loadContext = useContext(LoadContext);
    const timestamp = schedule?.timestamp.slice(0, -10);

    useEffect(() => {
        DataService.getSubstitutionSchedule().then(data => {
            setSchedule(data[data.length-1]);
            const repToday = data[data.length-1].today.classes.find((el: any) => el.className === "FIA93");
            const repTomorrow = data[data.length-1].tomorrow.classes.find((el: any) => el.className === "FIA93");
            setReplacementsToday(repToday);
            setReplacementsTomorrow(repTomorrow);
        })
    }, []);

    return (
        <IonPage id="main">
            <IonContent className={searchPostContext.isSearching_mobile ? "mobile-search-content--open" : ""}>
                <IonCard className="substitutionSchedule-card">
                    <div className="card-header">
                        <h1>FIA93</h1>
                        <h4>Letztes Update: {timestamp}</h4>
                    </div>
                    {schedule === null && loadContext.isLoading && <LoadingSpinner/>}
                    {schedule &&
                        <div className="content">
                            <div className="today">
                                <h2>
                                    {schedule.today.weekday} {schedule.today.day} - Woche {schedule.today.schoolWeek} - Turnus {schedule.today.turnus}
                                </h2>
                                {replacementsToday && replacementsToday.replacements.map((block: any, index: number) =>
                                    <BlockTable nr={block.lessonNr} block={block} key={index}/>
                                )}
                            </div>
                            <hr/>
                            <div className="tomorrow">
                                <h2>
                                    {schedule.tomorrow.weekday} {schedule.tomorrow.day} - Woche {schedule.tomorrow.schoolWeek} - Turnus {schedule.tomorrow.turnus}
                                </h2>
                                {replacementsTomorrow && replacementsTomorrow.replacements.map((block: any, index: number) =>
                                    <BlockTable nr={block.lessonNr} block={block} key={index}/>
                                )}
                            </div>
                        </div>
                    }
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

const BlockTable = ({ ...props }) => {
    return (
        <table>
            <tbody>
            <tr>
                <th className="block">{props.nr}. Stunde</th>
                <th className="old">Alt</th>
                <th className="new">Neu</th>
            </tr>
            <tr>
                <td>Fach</td>
                <td>{props.block?.oldLesson}</td>
                <td>{props.block?.newLesson}</td>
            </tr>
            <tr>
                <td>Lehrer</td>
                <td>{props.block?.oldTeacher}</td>
                <td>{props.block?.newTeacher}</td>
            </tr>
            <tr>
                <td>Raum</td>
                <td>{props.block?.oldRoom}</td>
                <td>{props.block?.newRoom}</td>
            </tr>
            </tbody>
        </table>
    )
};

export default SubstitutionSchedule;
