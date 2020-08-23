import React, {useContext, useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonIcon,
    IonList,
    IonPage,
} from "@ionic/react";
import './Post.scss';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import {ErrorContext, SearchPostContext} from "../../components/split-pane/Content";
import {LoadContext} from "../../../App";
import DataService from "../../services/data.service";
import {Elements} from "../../components/Elements/Elements";
import {LoadingSpinner} from "../../components/Spinner";
import {cog} from "ionicons/icons";
import {AuthContext} from "../../context/auth.context";

const Post = ({ ...props }) => {

    const [post, setPost] = useState(null as any);
    const [showImage, setShowImage] = useState(false as any);
    const [notFound, setNotFound] = useState(false);
    const [postAlreadyRead, setPostAlreadyRead] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const authContext = useContext(AuthContext);
    const errorContext = useContext(ErrorContext);
    const searchPostContext = useContext(SearchPostContext);

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getPost(props.match.url)
            .then(data => {
                if (data.error) {
                    setNotFound(true)
                } else {
                    setPost(data);
                    if (authContext?.user?.progress.find((el: any) => el === data._id)) {
                        setPostAlreadyRead(true);
                    } else {
                        setPostAlreadyRead(false);
                    }
                }
                loadContext.setLoading(false);
            })
            .catch(error => {
                loadContext.setLoading(false);
                errorContext.setMessage(error);
                setNotFound(true);
            });

        return () => {
            setPost(null);
        }
    }, [props.match.url, props.match.params.id]);

    function uploadProgress() {
        DataService.addProgressUnit({
            "userId": authContext.user?._id,
            "unitId": post?._id
        })
            .then(data => {
                errorContext.setMessage(data.message);
                setPostAlreadyRead(true);
            })
            .catch(err => errorContext.setMessage(err));
    }

    return (
        <IonPage id="main">
            <IonContent className={searchPostContext.isSearching_mobile ? "article__content mobile-search-content--open" : "article__content"}>
                <IonCard className="post__card">
                    <IonList className="article__list">
                        <div className="article-header">
                            <div className="article-details">
                                <h1>{post?.title || (notFound && "title")}</h1>
                                <h4>{post?.description || (notFound && "title")}</h4>
                            </div>
                            {authContext?.user?.role === "admin" &&
                                <IonButton fill="outline" mode="md" routerLink={props.match.url + "/edit"}>
                                    <IonIcon slot="start" icon={cog}/>
                                </IonButton>
                            }
                        </div>
                        {loadContext.isLoading && !post && <LoadingSpinner/>}
                        {notFound && <h1>Artikel nicht gefunden</h1>}
                        {post && post?.elements?.map((el: string | any, index: number) =>
                            <Elements path={props.match.url} key={index} el={el} setShowImage={setShowImage}/>
                        )}
                    </IonList>
                </IonCard>
                {post && postAlreadyRead !== null &&
                    <IonCard className="markAsRead-card">
                        <IonButton className="markAsRead-button text-button" fill="outline" mode="md" onClick={uploadProgress} disabled={postAlreadyRead}>
                            <p>{postAlreadyRead ? "Gelesen" : "Als Gelesen markieren"}</p>
                        </IonButton>
                    </IonCard>
                }
                {showImage && <Lightbox mainSrc={showImage} onCloseRequest={() => setShowImage(false)}/>}
            </IonContent>
        </IonPage>
    )
};

export default Post;
