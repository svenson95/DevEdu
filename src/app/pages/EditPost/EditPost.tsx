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
import './EditPost.scss';

import {ErrorContext} from "../../components/split-pane/Content";
import {LoadContext} from "../../../App";
import {AuthContext} from "../../context/auth.context";
import DataService from "../../services/data.service";
import {Elements} from "../../components/Elements/Elements";
import {newCode, newFile, newImage, newLine, newList, newSubtitle, newTable, newText, newTitle} from "./PostExamples";
import {PopoverChangeImage} from "../../components/Popover-ChangeImage/Popover-ChangeImage";
import {basePath} from "../../services/http.service";

const EditPost = ({ ...props }) => {

    const [postDetails, setPostDetails] = useState(null as any);
    const [post, setPost] = useState([] as any);
    const [showPopover, setShowPopover] = useState(false as any);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const authContext = useContext(AuthContext);
    const history = useHistory();
    const postUrl = (basePath + "/posts" + props.match.url).replace("/edit", "");

    useEffect(() => {
        return () => {
            setPost([]);
        }
    }, []);

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getPost(props.match.url.replace("/edit", ""))
            .then(data => {
                setPost(data?.elements);
                setPostDetails({
                    title: data.title,
                    description: data.description,
                    topic: data.topic,
                    url: data.url
                });
            })
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));

        return () => {
            setPost(null);
        }

    }, [props.match.url]);

    function saveNewPost() {
        const editedPost = {
            "elements": post,
            "topic": postDetails.topic,
            "url": postDetails.url,
            "_id": postDetails._id
        };

        DataService.editPost(postUrl + "/edit", editedPost)
            .then(() => {
                errorContext.setMessage("Artikel gespeichert");
                history.push(props.match.url.replace("/edit", ""));
            })
            .catch(error => errorContext.setMessage("Artikel konnte nicht gespeichert werden |" + error));
    }

    return (
        <IonPage id="main">
            <PopoverChangeImage
                post={post}
                setPost={setPost}
                showPopover={showPopover}
                setShowPopover={setShowPopover}
            />
            <IonCard className="utils__card">
                <div className="utils__wrapper">
                    <div className="utils__title">
                        <IonLabel>Werkzeuge</IonLabel>
                    </div>
                    <div className="button__wrapper">
                        <IonButton className="text-button" fill="outline" onClick={() => setPost([...post, newText])}>
                            <p>Text</p>
                        </IonButton>
                        <IonButton className="text-button" fill="outline" onClick={() => setPost([...post, newTitle])}>
                            <p>Title</p>
                        </IonButton>
                        <IonButton className="text-button" fill="outline" onClick={() => setPost([...post, newSubtitle])}>
                            <p>Subtitle</p>
                        </IonButton>
                        <IonButton className="text-button" fill="outline" onClick={() => setPost([...post, newImage])}>
                            <p>Image</p>
                        </IonButton>
                        <IonButton className="text-button" fill="outline" onClick={() => setPost([...post, newLine])}>
                            <p>Linie</p>
                        </IonButton>
                        <IonButton className="text-button" fill="outline" onClick={() => setPost([...post, newList])}>
                            <p>Liste</p>
                        </IonButton>
                        <IonButton className="text-button" fill="outline" onClick={() => setPost([...post, newTable])}>
                            <p>Tabelle</p>
                        </IonButton>
                        <IonButton className="text-button" fill="outline" onClick={() => setPost([...post, newCode])}>
                            <p>Code</p>
                        </IonButton>
                        <IonButton className="text-button" fill="outline" onClick={() => setPost([...post, newFile])}>
                            <p>File</p>
                        </IonButton>
                    </div>
                </div>
            </IonCard>
            <IonContent className="article__content">
                <IonCard className="newPost__card">
                    <IonList className="article__list">
                        <div className="article-header">
                            <h1>{postDetails?.title}</h1>
                            <h4>{postDetails?.description}</h4>
                        </div>
                        {post && post.map((el: string | any, index: number) =>
                            <Elements
                                key={index}
                                elements={post}
                                el={el}
                                setElements={setPost}
                                setShowPopover={setShowPopover}
                                isEditable={true}
                            />
                        )}
                    </IonList>
                </IonCard>
            </IonContent>
            <IonCard className="bottom__toolbar">
                {authContext?.user?.role === "admin" ?
                    <div className="button__wrapper">
                        <IonButton className="text-button" fill="outline" onClick={saveNewPost}>
                            <p>Speichern</p>
                        </IonButton>
                    </div>
                    :
                    <div className="button__wrapper">
                        <IonButton className="text-button" fill="outline" disabled>
                            <p>Speichern</p>
                        </IonButton>
                    </div>
                }
            </IonCard>
        </IonPage>
    )
};

export default EditPost;
