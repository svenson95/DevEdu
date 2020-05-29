import React, {useRef, useState} from "react";
import {useHistory} from "react-router";
import {IonButton, IonInput, IonItem, IonLabel, IonPopover, IonSelect, IonSelectOption} from "@ionic/react";

export const Popover = ({ ...props }) => {

    const [articleTitle, setArticleTitle] = useState<string>();
    const [articleDescription, setArticleDescription] = useState<string>();
    const [articleTopic, setArticleTopic] = useState<string>();
    const [isNewTopic, setNewTopic] = useState(false);
    const textInput = useRef<any>();

    const history = useHistory();

    function focus() {
        setTimeout(() => {
            textInput.current.setFocus();
        }, 200);
    }

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
                        onIonChange={e => setArticleTopic(e.detail.value)}
                    >
                        <IonSelectOption value="article">Artikel</IonSelectOption>
                        <IonSelectOption value="test">Test</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem className={isNewTopic ? "topic__input newTopic" : "topic__input hideInput"}>
                    <IonInput
                        placeholder="Thema"
                        ref={textInput}
                        onIonChange={e => setArticleTopic(e.detail.value!)}
                    />
                    <IonSelect
                        interface="popover"
                        placeholder="Topic"
                        onIonChange={e => {
                            if (e.detail.value! === "new") {
                                setNewTopic(true);
                                focus();
                                console.log(textInput.current);
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
            </div>
        </IonPopover>
    )
};
