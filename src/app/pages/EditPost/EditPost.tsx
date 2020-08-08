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
    const article = JSON.parse(localStorage.getItem("selectedPost")!);
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
                setPost(data[0]?.elements);
                setPostDetails(data[0]);
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
            "__v": postDetails!.__v || 0,
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
                        <IonButton fill="outline" onClick={() => setPost([...post, newCode])}>
                            Code
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setPost([...post, newFile])}>
                            File
                        </IonButton>
                    </div>
                </div>
            </IonCard>
            <IonContent className="article__content">
                <IonCard className="newPost__card">
                    <IonList className="article__list">
                        <div className="article-header">
                            {postDetails && <>
                                <h1>{article?.title}</h1>
                                <h4>{article?.description}</h4>
                            </>}
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

export default EditPost;
