import React, {useContext, useEffect, useState} from "react";
import {
    IonCard,
    IonContent,
    IonPage,
} from "@ionic/react";
import './SubstitutionSchedule.scss';

import {SearchPostContext} from "../../components/split-pane/Content";
import DataService from "../../services/data.service";

const SubstitutionSchedule = ({ ...props }) => {

    const [schedule, setSchedule] = useState(null as any);
    const searchPostContext = useContext(SearchPostContext);
    const timestamp = schedule?.timestamp.slice(0, -10);

    useEffect(() => {
        DataService.getSubstitutionSchedule().then(data => {
            setSchedule(data[0]);
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
                    {schedule &&
                        <div className="content">
                            <div className="today">
                                <h2>
                                    {schedule.today.weekday} {schedule.today.day} - Woche {schedule.today.schoolWeek} - Turnus {schedule.today.turnus}
                                </h2>
                                {schedule.today.classes?.FIA93?.firstBlock &&
                                    <BlockTable nr={1} block={schedule.today.classes.FIA93.firstBlock}/>
                                }
                                {schedule.today.classes?.FIA93?.secondBlock &&
                                    <BlockTable nr={2} block={schedule.today.classes.FIA93.secondBlock}/>
                                }
                                {schedule.today.classes?.FIA93?.thirdBlock &&
                                    <BlockTable nr={3} block={schedule.today.classes.FIA93.thirdBlock}/>
                                }
                            </div>
                            <hr/>
                            <div className="tomorrow">
                                <h2>
                                    {schedule.tomorrow.weekday} {schedule.tomorrow.day} - Woche {schedule.tomorrow.schoolWeek} - Turnus {schedule.tomorrow.turnus}
                                </h2>
                                {schedule.tomorrow.classes?.FIA93?.firstBlock &&
                                    <BlockTable nr={1} block={schedule.tomorrow.classes.FIA93.firstBlock}/>
                                }
                                {schedule.tomorrow.classes?.FIA93?.secondBlock &&
                                    <BlockTable nr={2} block={schedule.tomorrow.classes.FIA93.secondBlock}/>
                                }
                                {schedule.tomorrow.classes?.FIA93?.thirdBlock &&
                                    <BlockTable nr={3} block={schedule.tomorrow.classes.FIA93.thirdBlock}/>
                                }
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
                <th className="block">{props.nr}. Block</th>
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
