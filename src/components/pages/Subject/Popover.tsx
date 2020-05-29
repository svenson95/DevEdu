import React, {useState} from "react";
import {IonButton, IonInput, IonItem, IonLabel, IonPopover, IonSelect, IonSelectOption} from "@ionic/react";
import {useHistory} from "react-router";

export const Popover = ({ ...props }) => {

    const [articleTitle, setArticleTitle] = useState<string>();
    const [articleDescription, setArticleDescription] = useState<string>();
    const [articleUrl, setArticleUrl] = useState<string>();
    const [articleTopic, setArticleTopic] = useState<any>();
    const [articleType, setArticleType] = useState<string>();
    const [isNewTopic, setNewTopic] = useState(false);

    const history = useHistory();

    return (
        <IonPopover
            isOpen={props.showPopover}
            cssClass="createPost__popover"
            onDidDismiss={() => props.setShowPopover(false)}
            mode="md"
        >
            <div className="createPost__card">
                <IonItem>
                    <IonSelect
                        interface="popover"
                        placeholder="Typ"
                        onIonChange={e => setArticleType(e.detail.value)}
                    >
                        <IonSelectOption value="article">Artikel</IonSelectOption>
                        <IonSelectOption value="test">Test</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem className={isNewTopic ? "topic__input newTopic" : "topic__input hideInput"}>
                    <IonInput
                        placeholder="Thema"
                        onIonChange={e => setArticleTopic(e.detail.value!)}
                    />
                    <IonSelect
                        interface="popover"
                        placeholder="Topic"
                        onIonChange={e => {
                            setArticleTopic(e.detail.value);

                            if (e.detail.value! === "new") {
                                setNewTopic(true);
                            } else {
                                setNewTopic(false)
                            }
                        }}
                        selectedText={isNewTopic ? " " : undefined}
                    >
                        {props.subject?.topics.map((text: any, index: number) =>
                            <IonSelectOption key={index} value={text}>
                                {text.title}
                            </IonSelectOption>
                        )}
                        <IonSelectOption value="new">
                            Neues Thema
                        </IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem className="title__input">
                    <IonLabel position="floating">Titel</IonLabel>
                    <IonInput
                        value={articleTitle}
                        onIonChange={e => setArticleTitle(e.detail.value!)}
                    />
                </IonItem>
                <IonItem className="description__input">
                    <IonLabel position="floating">Beschreibung</IonLabel>
                    <IonInput
                        value={articleDescription}
                        onIonChange={e => setArticleDescription(e.detail.value!)}
                    />
                </IonItem>
                <IonItem className="title__input">
                    <IonLabel position="floating">URL</IonLabel>
                    <IonInput
                        value={articleUrl}
                        onIonChange={e => setArticleUrl(e.detail.value!)}
                    />
                </IonItem>
                <IonButton
                    fill="outline"
                    onClick={() => {
                        const newItem = {
                            title: articleTitle,
                            description: articleDescription,
                            url: articleUrl
                        };
                        localStorage.setItem("newPost", JSON.stringify(newItem));
                        console.log(props.subject);

                        let newSubject = props.subject;
                        const topic = newSubject.topics.find((el: any) => el.title === articleTopic?.title);
                        if (topic?.links) topic.links = [...topic?.links, newItem];

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
            </div>
        </IonPopover>
    )
};
