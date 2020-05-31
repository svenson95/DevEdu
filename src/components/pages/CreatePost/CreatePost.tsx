import React, {useContext, useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonLabel,
    IonList,
    IonPage,
} from "@ionic/react";
import './CreatePost.scss';

import {Elements} from "../../Elements/Elements";
import {newImage, newLine, newList, newSubtitle, newTable, newText, newTitle} from "./PostExamples";
import {basePath, fetchData} from "../../../helper/http.service";
import {ErrorContext, LoadContext} from "../../split-pane/Content";

const CreatePost = ({ ...props }) => {

    const [postData, setPostData] = useState(null as any);
    const [post, setPost] = useState([] as any);
    const article = JSON.parse(localStorage.getItem("newPost")!);

    let loadContext = useContext(LoadContext);
    let errorContext = useContext(ErrorContext);

    useEffect(() => {
        return () => {
            localStorage.removeItem("newPost");
            setPost([]);
            console.log('createPost unmount')
        }
    }, []);

    useEffect(() => {

        if (
            props.match.url.startsWith("/lf-1/") ||
            props.match.url.startsWith("/lf-2/") ||
            props.match.url.startsWith("/lf-3/") ||
            props.match.url.startsWith("/lf-4-1/") ||
            props.match.url.startsWith("/lf-4-2/")
        ) {
            loadContext.setLoading(true);
            fetchData(basePath + "posts" + props.match.url)
                .then(data => setPostData(data[0]))
                .catch(error => errorContext.setMessage(error))
                .finally(() => loadContext.setLoading(false));
        }

        return () => {
            setPost(null);
        }

    }, [props.match.url]);

    function saveNewPost() {
        const editedPost = {
            "elements": post,
            "url": postData.url,
            "topic": postData.topic,
            "_id": postData._id
        };

        console.log(editedPost);
    }

    return (
        <IonPage id="main">
            <IonCard className="utils__card">
                <div className="utils__wrapper">
                    <div className="utils__title">
                        <IonLabel>Werkzeuge</IonLabel>
                    </div>
                    <div className="button__wrapper">
                        <IonButton fill="outline" onClick={() => setPost([...post, newText])}>
                            Text
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setPost([...post, newTitle])}>
                            Title
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setPost([...post, newSubtitle])}>
                            Subtitle
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setPost([...post, newImage])}>
                            Image
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setPost([...post, newLine])}>
                            Linie
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setPost([...post, newList])}>
                            Liste
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setPost([...post, newTable])}>
                            Tabelle
                        </IonButton>
                    </div>
                </div>
            </IonCard>
            <IonContent className="article__content">
                <IonCard className="newPost__card">
                    <IonList className="article__list">
                        <div className="article__header">
                            <h1>{article.title || "Titel"}</h1>
                            <h4>{article.description || "Mitschrift vom 00.00.0000"}</h4>
                        </div>
                        {post.map((el: string | any, index: number) =>
                            <Elements
                                key={index}
                                elements={post}
                                el={el}
                                setElements={setPost}
                                isEditable={true}
                            />
                        )}
                    </IonList>
                </IonCard>
            </IonContent>
            <IonCard className="bottom__toolbar">
                <div className="button__wrapper">
                    <IonButton fill="outline" onClick={saveNewPost}>
                        Speichern
                    </IonButton>
                </div>
            </IonCard>
        </IonPage>
    )
};

export default CreatePost;
