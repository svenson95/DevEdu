import React, {useContext, useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonLabel,
    IonList,
    IonPage,
} from "@ionic/react";
import {useHistory} from "react-router";
import './CreatePost.scss';

import {Elements} from "../../components/Elements/Elements";
import {newImage, newLine, newList, newSubtitle, newTable, newText, newTitle} from "./PostExamples";
import {basePath, fetchData, patchRequest} from "../../services/http.service";
import {ErrorContext} from "../../components/split-pane/Content";
import {AuthContext, LoadContext} from "../../../App";

const CreatePost = ({ ...props }) => {

    const [postData, setPostData] = useState(null as any);
    const [post, setPost] = useState([] as any);
    const postUrl = (basePath + "posts" + props.match.url).replace("/createPost", "");

    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const authContext = useContext(AuthContext);
    const history = useHistory();

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
            fetchData(postUrl)
                .then(data => {
                    setPost(data[0]?.elements);
                    setPostData(data[0]);
                })
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
            "url": postData?.url,
            "topic": postData?.topic,
            "_id": postData?._id
        };

        patchRequest(postUrl + "/edit", editedPost)
            .then(() => {
                errorContext.setMessage("Artikel gespeichert");
                history.push(props.match.url.replace("/createPost", ""));
            })
            .catch(error => errorContext.setMessage("Artikel konnte nicht gespeichert werden |" + error));
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
                            {postData && <>
                                <h1>{postData?.title || "Titel"}</h1>
                                <h4>{postData?.description || "Mitschrift vom 00.00.0000"}</h4>
                            </>}
                        </div>
                        {post && post.map((el: string | any, index: number) =>
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
                {authContext.authed?.user?.role === "admin" ?
                    <div className="button__wrapper">
                        <IonButton fill="outline" onClick={saveNewPost}>
                            Speichern
                        </IonButton>
                    </div>
                    :
                    <div className="button__wrapper">
                        <IonButton fill="outline" disabled>
                            Speichern
                        </IonButton>
                    </div>
                }
            </IonCard>
        </IonPage>
    )
};

export default CreatePost;
