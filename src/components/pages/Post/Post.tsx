import React, {useContext, useEffect, useState} from "react";
import {
    IonCard,
    IonContent,
    IonList,
    IonPage,
    useIonViewDidLeave,
} from "@ionic/react";
import './Post.scss';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import {subjectsData} from "../../../data/subjectsData";
import {articleData} from "../../../data/posts/articleData";
import {ErrorContext} from "../../split-pane/Content";
import {basePath, fetchData} from "../../../helper/http.service";
import {Elements} from "../../Elements/Elements";
import {LoadingSpinner} from "../../Spinner";
import {LoadContext} from "../../../App";

const Post = ({ ...props }) => {

    const [post, setPost] = useState(null as any);
    const [isDataArticle, setDataSource] = useState("local");
    const [showImage, setShowImage] = useState(false as any);

    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);

    const article2 = articleData.find(el => props.match.url.includes(el.url));
    const subject = subjectsData.find(el => props.match.url.includes(el.subject));

    const articleTitle = JSON.parse(localStorage.getItem("selectedPost")!)?.title;
    const articleDescription = JSON.parse(localStorage.getItem("selectedPost")!)?.description;

    const testTitle = subject?.tests?.find(el => props.match.url.includes(el.url))?.title;
    const testDescription = subject?.tests?.find(el => props.match.url.includes(el.url))?.description;

    useEffect(() => {

        if (
            props.match.url.startsWith("/lf-1/") ||
            props.match.url.startsWith("/lf-2/") ||
            props.match.url.startsWith("/lf-3/") ||
            props.match.url.startsWith("/lf-4-1/") ||
            props.match.url.startsWith("/lf-4-2/")
        ) {
            loadContext.setLoading(true);
            setDataSource("server");

            loadContext.setLoading(true);
            fetchData(basePath + "posts/" + props.match.url)
                .then(data => setPost(data[0]))
                .catch(error => errorContext.setMessage(error))
                .finally(() => loadContext.setLoading(false));
        } else {
            setDataSource("local");
        }

        return () => {
            setPost(null);
            setDataSource("local");
        }

    useIonViewDidLeave(() => {
        setPost(null);
        setDataSource("local");
    });

    return (
        <IonPage id="main">
            <IonContent className="article__content">
                <IonCard className="post__card">
                    <IonList className="article__list">
                        <div className="article__header">
                            <h1>{post?.title || articleTitle || testTitle}</h1>
                            <h4>{articleDescription || testDescription}</h4>
                        </div>
                        {loadContext.isLoading && !post && <LoadingSpinner/>}
                        {isDataArticle === "local" ?
                            article2?.elements.map((el: string | any, index: number) =>
                                <Elements path={props.match.url} key={index} el={el} setShowImage={setShowImage}/>
                            )
                            :
                            post?.elements.map((el: string | any, index: number) =>
                                <Elements path={props.match.url} key={index} el={el} setShowImage={setShowImage}/>
                            )
                        }
                    </IonList>
                </IonCard>
                {showImage && <Lightbox mainSrc={showImage} onCloseRequest={() => setShowImage(false)}/>}
            </IonContent>
        </IonPage>
    )
};

export default Post;
