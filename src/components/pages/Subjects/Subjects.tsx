import React, {useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent, IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonPopover, IonSelect, IonSelectOption,
} from "@ionic/react";

import './Subjects.scss';
import { subjectsData } from "../../../data/subjectsData";
import {add} from "ionicons/icons";

const Subjects = ({ ...props }) => {

    const [subjects, setSubjects] = useState(null as any);
    const [showPopover, setShowPopover] = useState(false);

    useEffect(() => {
        setSubjects(subjectsData.find(el => el.subject === props.match.url.substring(1)));

        return () => setSubjects(null);
    }, [props.match.url]);

    return (
        <IonPage id="main">
            <IonContent>
                <div className="subject__container">
                    {subjects &&
                        <IonCard>
                            <div className="subjects__list">
                                <IonList>
                                    <div className="header__wrapper">
                                        <h1>Themen</h1>
                                        <IonButton fill="outline" onClick={() => setShowPopover(true)}>
                                            <IonIcon slot="start" icon={add} />
                                        </IonButton>
                                    </div>
                                    <Popover showPopover={showPopover} setShowPopover={setShowPopover} />
                                    {subjects?.topics.map((el: any, index: number) =>
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
                    }
                    {subjects?.tests &&
                        <IonCard>
                            <div className="subjects__list">
                                <IonList>
                                    <div>
                                        <h1>Tests</h1>
                                        <ul>
                                            {subjects?.tests.map((test: any, index: number) =>
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

const Popover = ({ ...props }) => {

    const [articleTitle, setArticleTitle] = useState<string>();
    const [articleDescription, setArticleDescription] = useState<string>();
    const [articleTopic, setArticleTopic] = useState<string>();
    const topics = ["Der Betrieb", "Allgmeine", "Test"];

    return (
        <IonPopover
            isOpen={props.showPopover}
            cssClass="createPost__popover"
            onDidDismiss={() => props.setShowPopover(false)}
        >
            <IonCard className="createPost__card">
                <IonItem>
                    <IonSelect
                        interface="popover"
                        placeholder="Typ"
                        onIonChange={e => setArticleTopic(e.detail.value)}
                    >
                        <IonSelectOption value="article">Artikel</IonSelectOption>
                        <IonSelectOption value="test">Test</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem className="topic__input">
                    <IonInput
                        placeholder="Thema"
                        value={articleTopic}
                        onIonChange={e => setArticleTopic(e.detail.value!)}
                    />
                    <IonSelect
                        interface="popover"
                        placeholder="Topic"
                        onIonChange={e => setArticleTopic(e.detail.value)}
                    >
                        {topics.map(text =>
                            <IonSelectOption value={text}>
                                {text}
                            </IonSelectOption>
                        )}
                    </IonSelect>
                </IonItem>
                <IonItem className="title__input">
                    <IonLabel position="floating">Article Title</IonLabel>
                    <IonInput
                        value={articleTitle}
                        onIonChange={e => setArticleTitle(e.detail.value!)}
                    />
                </IonItem>
                <IonItem className="description__input">
                    <IonLabel position="floating">Article Description</IonLabel>
                    <IonInput
                        value={articleDescription}
                        onIonChange={e => setArticleDescription(e.detail.value!)}
                    />
                </IonItem>
                <IonButton fill="outline" onClick={() => props.setShowPopover(false)}>
                    Speichern
                </IonButton>
            </IonCard>
        </IonPopover>
    )
}

export default Subjects;
