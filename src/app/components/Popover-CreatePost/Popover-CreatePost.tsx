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
    const [articleTopic, setArticleTopic] = useState<any>();
    const [articleType, setArticleType] = useState<any>();
    const [isNewTopic, setNewTopic] = useState(false);

    const loadContext = useContext(LoadContext);
    const history = useHistory();
    let newItemUrl: string;

    function toUrlCase(text: string) {
        return text?.split(' ').join('_')
                  .split('ä').join('ae')
                  .split('ö').join('oe')
                  .split('ü').join('ue')
                  .split('&').join('und')
                  .split('(').join('')
                  .split(')').join('')
                  .split(',').join('')
                  .toLowerCase();
    }

    async function createPostObject() {
        const topic = props.subject.topics.find((el: any) => el.title === articleTopic?.title);
        const urlFromFirstLink = topic?.links[0]?.url;
        const topicUrl = urlFromFirstLink?.slice(0, urlFromFirstLink?.lastIndexOf("/")) || toUrlCase(articleTopic);

        let newItem;
        let newPost;

        if (articleType === "article" && !isNewTopic) {
            newItemUrl = topicUrl + "/" + toUrlCase(articleTitle!);
            newItem = { title: articleTitle, description: articleDescription, url: topicUrl + "/" + toUrlCase(articleTitle!) };
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
        } else if (articleType === "test" && !isNewTopic) {
            newItemUrl = toUrlCase(articleTitle!) + "/test";
            newItem = { title: articleTitle, description: articleDescription, url: toUrlCase(articleTitle!) + "/test" };
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
            newItemUrl = topicUrl + "/" + toUrlCase(articleTitle!);
            newItem = { title: articleTitle, description: articleDescription, url: topicUrl + "/" + toUrlCase(articleTitle!) };
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

        await DataService.createPost(props.subject.subject, topicUrl, newPost)
            .then(res => console.log(res))
            .catch(error => console.log(error));
        return newItem;
    }

    function editSubjectObject(link: any) {
        let editedSubject;

        if (isNewTopic) {
            editedSubject = {
                "topics": [
                    ...props.subject.topics,
                    { title: articleTopic, links: [link] }
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

        DataService.editSubject(props.subject.subject, editedSubject)
            .then(() => history.push(newItemUrl + "/edit"))
            .catch(error => console.log(error));
    }

    function confirmNewPost() {

        loadContext.setLoading(true);
        createPostObject().then(topicLinks => editSubjectObject(topicLinks));

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
