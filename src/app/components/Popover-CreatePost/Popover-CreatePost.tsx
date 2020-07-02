import React, {useContext, useState} from "react";
import {
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonPopover,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import './Popover-CreatePost.scss';
import {useHistory} from "react-router";

import {LoadContext} from "../../../App";
import DataService from "../../services/data.service";

export const PopoverCreatePost = ({ ...props }) => {

    const [articleTitle, setArticleTitle] = useState<string>();
    const [articleDescription, setArticleDescription] = useState<string>();
    const [articleUrl, setArticleUrl] = useState<string>();
    const [articleTopic, setArticleTopic] = useState<any>();
    const [articleType, setArticleType] = useState<any>();
    const [isNewTopic, setNewTopic] = useState(false);

    const loadContext = useContext(LoadContext);

    const history = useHistory();
    let newItemUrl: string;

    function convertSubjectUrl(topic: string) {
        return topic?.replace(' ', '_')
                  .replace('ä', 'ae')
                  .replace('ö', 'oe')
                  .replace('ü', 'ue')
                  .toLowerCase();
    }

    function createPostObject() {
        const topic = props.subject.topics.find((el: any) => el.title === articleTopic?.title);
        const urlFromFirstLink = topic?.links[0]?.url;
        const topicUrl = urlFromFirstLink?.slice(0, urlFromFirstLink?.lastIndexOf("/")) || convertSubjectUrl(articleTopic);

        let newItem;
        let newPost;

        if (articleType === "article" && !isNewTopic) {
            newItemUrl = history.location.pathname + "/" + topicUrl + "/" + articleUrl;
            newItem = { title: articleTitle, description: articleDescription, url: topicUrl + "/" + articleUrl };
            topic.links = [...topic?.links, newItem];
            newPost = {
                "elements": [
                    {
                        "type": "text",
                        "content": "test"
                    }
                ],
                "url": newItemUrl,
                "topic": topic.title
            };
        } else if (articleType === "test") {
            newItemUrl = history.location.pathname + "/" + articleUrl + "/test";
            newItem = { title: articleTitle, description: articleDescription, url: articleUrl + "/test" };
            props.subject.tests = [...props.subject.tests, newItem];
            newPost = {
                "elements": [
                    {
                        "type": "text",
                        "content": "test"
                    }
                ],
                "url": newItemUrl,
                "topic": "test"
            };
        } else if (isNewTopic) {
            newItemUrl = history.location.pathname + "/" + topicUrl + "/" + articleUrl;
            newPost = {
                "elements": [
                    {
                        "type": "text",
                        "content": "test"
                    }
                ],
                "url": newItemUrl,
                "topic": articleTopic
            };
        }

        localStorage.setItem("selectedPost", JSON.stringify({
            title: articleTitle,
            description: articleDescription,
            url: newItemUrl
        }));

        DataService.createPost(props.subject.subject, newPost)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }

    function editSubjectObject() {
        let editedSubject;

        if (isNewTopic) {
            editedSubject = {
                "topics": [
                    ...props.subject.topics,
                    { title: articleTopic, links: [] }
                ],
                "tests": props.subject.tests,
                "_id": props.subject._id,
                "subject": props.subject.subject
            };
        } else {
            editedSubject = {
                "topics": props.subject.topics,
                "tests": props.subject.tests,
                "_id": props.subject._id,
                "subject": props.subject.subject
            };
        }

        DataService.editSubject(props.subjectId, editedSubject)
            .then(() => history.push(newItemUrl + "/edit"))
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
                {articleType !== "test" &&
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
                }
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
                <IonItem className="url__input">
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
