import React, {useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonPopover,
    IonSelect,
    IonSelectOption,
} from "@ionic/react";

import './Subject.scss';
import { subjectsData } from "../../../data/subjectsData";
import {add} from "ionicons/icons";
import {useHistory} from "react-router";

const Subject = ({ ...props }) => {

    const localSubject = subjectsData.find(el => el.subject === props.match.url.substring(1));
    const [subject, setSubject] = useState(localSubject as any);
    const [showPopover, setShowPopover] = useState(false);

    useEffect(() => {
        setSubject(localSubject);
        return () => setSubject(null);
    }, [localSubject, props.match.url]);

    return (
        <IonPage id="main">
            <IonContent>
                <div className="subject__container">
                    {subject &&
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
                    }
                    {subject?.tests &&
                        <IonCard>
                            <div className="subjects__list">
                                <IonList>
                                    <div>
                                        <h1>Tests</h1>
                                        <ul>
                                            {subject?.tests.map((test: any, index: number) =>
                                                <IonItem
                                                    key={index}
                                                    routerLink={props.match.url + "/" + test.url}
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
    const [isNewTopic, setNewTopic] = useState(false);
    const topics = ["Der Betrieb", "Allgmeine", "Test"];

    const history = useHistory();

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
                <IonItem className={isNewTopic ? "topic__input newTopic" : "topic__input hideInput"}>
                    <IonInput
                        placeholder="Thema"
                        value={articleTopic}
                        onIonChange={e => setArticleTopic(e.detail.value!)}
                    />
                    <IonSelect
                        interface="popover"
                        placeholder="Topic"
                        onIonChange={e => e.detail.value! === "new" ? setNewTopic(true) : setNewTopic(false)}
                        selectedText={isNewTopic ? " " : undefined}
                    >
                        {topics.map((text: any, index) =>
                            <IonSelectOption key={index} value={text}>
                                {text}
                            </IonSelectOption>
                        )}
                        <IonSelectOption value="new">
                            Neues Thema
                        </IonSelectOption>
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
                <IonButton
                    fill="outline"
                    onClick={() => {
                        localStorage.setItem("newPost", JSON.stringify({
                            title: articleTitle,
                            description: articleDescription,
                            topic: articleTopic
                        }));
                        props.setShowPopover(false);
                        setArticleTitle(undefined);
                        setArticleDescription(undefined);
                        setArticleTopic(undefined);
                        setNewTopic(false);
                    }}
                    routerLink={history.location.pathname + "/createPost"}
                >
                    Speichern
                </IonButton>
            </IonCard>
        </IonPopover>
    )
}

export default Subject;
