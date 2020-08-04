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

import {ErrorContext} from "../../components/split-pane/Content";
import {LoadContext} from "../../../App";
import DataService from "../../services/data.service";
import {Elements} from "../../components/Elements/Elements";
import {LoadingSpinner} from "../../components/Spinner";

const Post = ({ ...props }) => {

    const [post, setPost] = useState(null as any);
    const [showImage, setShowImage] = useState(false as any);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const article = JSON.parse(localStorage.getItem("selectedPost")!);

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getPost(props.match.url)
            .then(data => setPost(data[0]))
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));

        return () => {
            setPost(null);
        }
    }, [props.match.url]);

    useEffect(() => {
        setPost(null);
    }, []);

    return (
        <IonPage id="main">
            <IonContent className="article__content">
                <IonCard className="post__card">
                    <IonList className="article__list">
                        <div className="article-header">
                            <h1>{article?.title}</h1>
                            <h4>{article?.description}</h4>
                        </div>
                        {loadContext.isLoading && !post && <LoadingSpinner/>}
                        {post && post.elements.map((el: string | any, index: number) =>
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
