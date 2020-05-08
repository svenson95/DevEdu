import {
    IonCard,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
} from "@ionic/react";
import React, {useEffect} from "react";

import './Subject.scss';
import { subjectsData } from "../../../data/subjectsData";
import Header from "../../Header";

let Subject = ({ ...props }) => {

    const subject = subjectsData.find(el => el.subject === props.match.url.substring(1));

    useEffect(() => {
        console.log('Route changed', props.match.url);
    }, [props.match.url]);

    console.log('subject rendered');

    return (
        <IonContent>
            <Header/>
            <div className="subject__cards">
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
                                                routerLink={link.title}
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
                                                routerLink={test.title}
                                                routerDirection="forward"
                                                lines="none"
                                                detail={false}
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
    )
};

export default Subject;
