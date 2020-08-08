import React, {useContext, useEffect, useState} from "react";
import {
    IonCard,
    IonContent,
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

const Post = ({ ...props }) => {

    const [post, setPost] = useState(null as any);
    const [showImage, setShowImage] = useState(false as any);
    const [notFound, setNotFound] = useState(false);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const searchPostContext = useContext(SearchPostContext);

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getPost(props.match.url)
            .then(data => data.error ? setNotFound(true) : setPost(data))
            .catch(error => errorContext.setMessage(error) || setNotFound(true))
            .finally(() => loadContext.setLoading(false));

        return () => {
            setPost(null);
        }
    }, [props.match.url]);

    return (
        <IonPage id="main">
            <IonContent className={searchPostContext.isSearching_mobile ? "article__content mobile-search-content--open" : "article__content"}>
                <IonCard className="post__card">
                    <IonList className="article__list">
                        <div className="article-header">
                            <h1>{post?.title || (notFound && "title")}</h1>
                            <h4>{post?.description || (notFound && "title")}</h4>
                        </div>
                        {loadContext.isLoading && !post && <LoadingSpinner/>}
                        {notFound && <h1>Artikel nicht gefunden</h1>}
                        {post && post?.elements?.map((el: string | any, index: number) =>
                            <Elements path={props.match.url} key={index} el={el} setShowImage={setShowImage}/>
                        )}
                    </IonList>
                </IonCard>
                {showImage && <Lightbox mainSrc={showImage} onCloseRequest={() => setShowImage(false)}/>}
            </IonContent>
        </IonPage>
    )
};

export default Post;
