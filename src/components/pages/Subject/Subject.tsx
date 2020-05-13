import React, {useEffect, useState} from "react";
import {
    IonCard, IonContent,
    IonItem,
    IonList, IonPage,
} from "@ionic/react";

import './Subject.scss';
import { subjectsData } from "../../../data/subjectsData";

let Subject = ({ ...props }) => {

    const [subject, setSubject] = useState(null as any);

    useEffect(() => {
        setSubject(subjectsData.find(el => el.subject === props.match.url.substring(1)));
    }, [props.match.url]);

    return (
        <IonPage id="main">
            <IonContent>
                <div className="subject__container">
                    <IonCard>
                        <div className="subject__list">
                            <IonList>
                                <h1>Themen</h1>
                                {subject?.topics.map((el: any, index: number) =>
                                    <div key={index}>
                                        <h2>{el.title}</h2>
                                        <ul>
                                            {el.links.map((link: any, index: number) =>
                                                <IonItem
                                                    key={index}
                                                    routerLink={props.match.url + "/" + link.url}
                                                    routerDirection="forward"
                                                    lines="none"
                                                    detail={true}
                                                >
                                                    <div className="element__wrapper">
                                                        <div className="title">{link.title}</div>
                                                        <div className="description">{link.description}</div>
                                                    </div>
                                                </IonItem>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </IonList>
                        </div>
                    </IonCard>
                    {subject?.tests &&
                        <IonCard>
                            <div className="subject__list">
                                <IonList>
                                    <div>
                                        <h1>Tests</h1>
                                        <ul>
                                            {subject?.tests.map((test: any, index: number) =>
                                                <IonItem
                                                    key={index}
                                                    routerLink={test.url}
                                                    routerDirection="forward"
                                                    lines="none"
                                                    detail={true}
                                                >
                                                    <div className="element__wrapper">
                                                        <div className="title">{test.title}</div>
                                                        <div className="description">{test.description}</div>
                                                    </div>
                                                </IonItem>
                                            )}
                                        </ul>
                                    </div>
                                </IonList>
                            </div>
                        </IonCard>
                    }
                </div>
            </IonContent>
        </IonPage>
    )
};

export default Subject;
