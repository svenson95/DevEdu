import {IonCard, IonContent, IonList, IonListHeader, IonPage} from "@ionic/react";
import React from "react";

import './Subject.scss';
import {useParams} from "react-router";
import {subjectsData} from "../../data/subjectsData";

let Subject = () => {

    const { name } = useParams<{ name: string; }>();
    const subject = subjectsData.find(el => el.subject === name);

    return (
        <IonPage>
            <IonContent>
                <IonCard>
                    <div className="subject__list">
                        <IonList>
                            <h1>Themen</h1>
                            {subject?.topics.map((el: any, index: number) =>
                                <div key={index}>
                                    <IonListHeader>{el.title}</IonListHeader>
                                    <ul>
                                        {el.links.map((link: any, index: number) =>
                                            <li key={index}>
                                                <div className="title">{link.title}</div>
                                                <div className="description">{link.description}</div>
                                            </li>
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
                                        {subject?.tests.map((el: any, index: number) =>
                                            <li key={index}>
                                                <div className="title">{el.title}</div>
                                                <div className="description">{el.description}</div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </IonList>
                        </div>
                    </IonCard>
                }
            </IonContent>
        </IonPage>
    )
};

export default Subject;
