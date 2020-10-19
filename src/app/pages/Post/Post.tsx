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
import {useHistory} from "react-router";

const Post = ({ ...props }) => {

    const [post, setPost] = useState(null as any);
    const [showImage, setShowImage] = useState(false as any);
    const [notFound, setNotFound] = useState(false);
    const [postAlreadyRead, setPostAlreadyRead] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const authContext = useContext(AuthContext);
    const errorContext = useContext(ErrorContext);
    const searchPostContext = useContext(SearchPostContext);
    const history = useHistory();

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getPost(props.match.url)
            .then(data => {
                document.title = data?.title + " - tecbook";
                if (data.error) {
                    setNotFound(true)
                } else {
                    setPost(data);
                    if (authContext?.user?.progress.find((el: any) => el === data._id)) {
                        setPostAlreadyRead(true);
                    } else if (authContext?.user) {
                        setPostAlreadyRead(false);
                    }
                }
                if (!data.elements.find((el: any) => el.type === "image")) {
                    loadContext.setLoading(false);
                }
            })
            .catch(error => {
                loadContext.setLoading(false);
                errorContext.setMessage(error);
                setNotFound(true);
            });

        return () => {
            setPost(null);
        }
    }, [props.match.url]);

    useEffect(() => {
        if (history.location.pathname === props.match.url && post !== null) {
            document.title = post?.title + ' - tecbook';
        }
    }, [history.location.key]);

    function uploadProgress() {
        loadContext.setLoading(true);
        DataService.addProgressUnit({
            "userId": authContext.user?._id,
            "postId": post?._id
        })
            .then(() => {
                setPostAlreadyRead(true);
                authContext.user.progress.push(post?._id);
            })
            .catch(err => errorContext.setMessage(err))
            .finally(() => loadContext.setLoading(false))
    }

    function transformDate(date: string) {
        const year = date?.substring(0, 4);
        const month = date?.substring(5, 7);
        const day = date?.substring(8, 10);
        return day + "." + month + "." + year;
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
                        {post &&
                            <div className="ddu-last-update-label">
                                <span>Letzte Aktualisierung: {transformDate(post?.lastUpdate)}</span>
                            </div>
                        }
                    </IonList>
                </IonCard>
                {post && authContext.user !== null &&
                    <IonCard className="markAsRead-card">
                        {loadContext.isLoading ?
                            <LoadingSpinner/>
                            :
                            <IonButton className="markAsRead-button text-button" mode="md" fill="outline" onClick={uploadProgress} disabled={postAlreadyRead}>
                                <p>{postAlreadyRead ? "Gelesen" : "Als Gelesen markieren"}</p>
                            </IonButton>
                        }
                    </IonCard>
                }
                {showImage && <Lightbox mainSrc={showImage} onCloseRequest={() => setShowImage(false)}/>}
            </IonContent>
        </IonPage>
    )
};

export default Post;
