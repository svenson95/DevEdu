import React, {useContext, useEffect, useState} from "react";
import {
    IonCard,
    IonContent,
    IonPage,
} from "@ionic/react";
import './SubstitutionSchedule.scss';

import {ErrorContext, SearchPostContext} from "../../app-common/split-pane/Content";
import DataService from "../../services/data.service";
import {LoadingSpinner} from "../../components/Spinner";
import {LoadContext} from "../../../App";

const SubstitutionSchedule = ({ ...props }) => {

    const [schedule, setSchedule] = useState(null as any);
    const [replacementsToday, setReplacementsToday] = useState(null as any);
    const [replacementsTomorrow, setReplacementsTomorrow] = useState(null as any);
    const searchPostContext = useContext(SearchPostContext);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);

    const timestamp = schedule?.timestamp.slice(0, -10);
    const convertedDate = timestamp?.slice(0, -6);
    const convertedTime = timestamp?.slice(11, 16);
    const date = {
        day: convertedDate?.slice(8, 10),
        month: convertedDate?.slice(5, 7),
        year: convertedDate?.slice(0, 4)
    };

    useEffect(() => {
        loadContext.setLoading(true);
        DataService.getSubstitutionSchedule()
            .then(data => {
                setSchedule(data[data.length-1]);
                const repToday = data[data.length-1].today.classes.find((el: any) => el.className === "FIA93");
                const repTomorrow = data[data.length-1].tomorrow.classes.find((el: any) => el.className === "FIA93");
                setReplacementsToday(repToday);
                setReplacementsTomorrow(repTomorrow);
            })
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false))
    }, []);

    return (
        <IonPage id="main">
            <IonContent className={searchPostContext.isSearching_mobile ? "mobile-search-content--open" : ""}>
                <IonCard className="substitutionSchedule-card">
                    <div className="card-header">
                        <h1>FIA93</h1>
                        <h4>Letzte Aktualisierung: {date.day}.{date.month}.{date.year} {convertedTime}</h4>
                    </div>
                    {schedule === null && loadContext.isLoading && <LoadingSpinner/>}
                    {replacementsToday === undefined && replacementsTomorrow === undefined && 
                        <h2>Keine Vertretungen</h2>
                    }
                    {schedule &&
                        <div className="content">
                            {replacementsToday !== undefined &&
                                <div className="today">
                                    <h2>
                                        {schedule.today.weekday} {schedule.today.day} -
                                        Woche {schedule.today.schoolWeek} - Turnus {schedule.today.turnus} ({schedule.today.turnus === "I" ? "ungerade" : "gerade"})
                                    </h2>
                                    {replacementsToday !== undefined && replacementsToday?.replacements.map((block: any, index: number) =>
                                        <BlockTable nr={block.lessonNr} block={block} key={index}/>
                                    )}
                                </div>
                            }
                            {replacementsTomorrow !== undefined &&
                                <>
                                    <hr/>
                                    <div className="tomorrow">
                                        <h2>
                                            {schedule.tomorrow.weekday} {schedule.tomorrow.day} -
                                            Woche {schedule.tomorrow.schoolWeek} - Turnus {schedule.tomorrow.turnus} ({schedule.tomorrow.turnus === "I" ? "ungerade" : "gerade"})
                                        </h2>
                                        {replacementsTomorrow !== undefined && replacementsTomorrow?.replacements.map((block: any, index: number) =>
                                            <BlockTable nr={block.lessonNr} block={block} key={index}/>
                                        )}
                                    </div>
                                </>
                            }
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
