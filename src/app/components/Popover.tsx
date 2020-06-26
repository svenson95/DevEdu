import React, {useContext, useState} from "react";
import {IonButton, IonInput, IonItem, IonLabel, IonPopover, IonSelect, IonSelectOption} from "@ionic/react";
import {basePath, putRequest, patchRequest} from "../services/http.service";
import {useHistory} from "react-router";
import {LoadContext} from "../../App";

export const Popover = ({ ...props }) => {

    const [articleTitle, setArticleTitle] = useState<string>();
    const [articleDescription, setArticleDescription] = useState<string>();
    const [articleUrl, setArticleUrl] = useState<string>();
    const [articleTopic, setArticleTopic] = useState<any>();
    const [articleType, setArticleType] = useState<any>();
    const [isNewTopic, setNewTopic] = useState(false);

    const loadContext = useContext(LoadContext);

    const history = useHistory();
    const path = history.location.pathname;
    let newItemUrl: string;

    function createPostObject() {
        const topic = props.subject.topics.find((el: any) => el.title === articleTopic?.title);
        const urlFromFirstLink = topic.links[0]?.url;
        const topicUrl = urlFromFirstLink.slice(0, urlFromFirstLink.lastIndexOf("/"));

        const newItem = { title: articleTitle, description: articleDescription, url: topicUrl + "/" + articleUrl };
        newItemUrl = path + "/" + topicUrl + "/" + articleUrl;
        if (topic?.links) topic.links = [...topic?.links, newItem];

        const newPost = {
            "elements": [
                {
                    "type": "text",
                    "content": "test"
                }
            ],
            "url": newItemUrl,
            "topic": topic.title
        };

        putRequest(basePath + "posts/" + props.subject.subject + "/new", newPost)
            .then(res => console.log(res))
            .catch(error => console.log(error));

        localStorage.setItem("newPost", JSON.stringify(newItem));
    }

    function editSubjectObject() {
        const editedSubject = {
            "topics": props.subject.topics,
            "tests": props.subject.tests,
            "_id": props.subject._id,
            "subject": props.subject.subject
        };

        patchRequest(basePath + "subjects/" + props.subjectId + "/edit", editedSubject)
            .then(() => history.push(newItemUrl + "/createPost"))
            .catch(error => console.log(error));
    }

    function confirmNewPost() {

        loadContext.setLoading(true);
        createPostObject();
        editSubjectObject();

        props.setShowPopover(false);
        setArticleTitle(undefined);
        setArticleDescription(undefined);
        setArticleTopic(undefined);
        setNewTopic(false);
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
                    onClick={confirmNewPost}
                >
                    Speichern
                </IonButton>
            </div>
        </IonPopover>
    )
};
