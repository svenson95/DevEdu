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
                    <h1>Themen</h1>
                    <div className="subject__list">
                        <IonList>
                            {subject?.topics.map((el: any, index: number) =>
                                <div key={index}>
                                    <IonListHeader>{el.title}</IonListHeader>
                                    <ul>
                                        {el.links.map((link: any, index: number) =>
                                            <li key={index}>
                                                {link}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </IonList>
                    </div>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Subject;
