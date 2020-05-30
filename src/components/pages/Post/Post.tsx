import React, {useContext, useEffect, useState} from "react";
import {
    IonCard,
    IonContent,
    IonList,
    IonPage,
} from "@ionic/react";
import {useRouteMatch} from "react-router";
import './Post.scss';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import {subjectsData} from "../../../data/subjectsData";
import {articleData} from "../../../data/posts/articleData";
import {ErrorContext, LoadContext} from "../../split-pane/Content";
import {basePath, fetchData} from "../../../helper/http.service";
import {Elements} from "../../Elements/Elements";
import {LoadingSpinner} from "../../Spinner";

const Post = ({ ...props }) => {

    const [post, setPost] = useState(null as any);
    const [isDataArticle, setDataSource] = useState("local");
    const [showImage, setShowImage] = useState(false as any);

    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const { path } = useRouteMatch();

    const article2 = articleData.find(el => props.match.url.includes(el.url));
    const subject = subjectsData.find(el => path.includes(el.subject));

    const articleTitle = JSON.parse(localStorage.getItem("selectedPost")!)?.title;
    const articleDescription = JSON.parse(localStorage.getItem("selectedPost")!)?.description;

    const testTitle = subject?.tests?.find(el => path.includes(el.url))?.title;
    const testDescription = subject?.tests?.find(el => path.includes(el.url))?.description;

    useEffect(() => {

        if (
            path.startsWith("/lf-1/") ||
            path.startsWith("/lf-2/") ||
            path.startsWith("/lf-3/")
        ) {
            loadContext.setLoading(true);
            setDataSource("server");

            loadContext.setLoading(true);
            fetchData(basePath + "posts/" + path)
                .then(data => {
                    setPost(data[0]);
                })
                .catch(error => errorContext.setMessage(error))
                .finally(() => loadContext.setLoading(false));
        } else {
            setDataSource("local");
        }

        return () => {
            setPost(null);
            setDataSource("local");
        }

    }, [path]);

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
                                <Elements path={path} key={index} el={el} setShowImage={setShowImage}/>
                            )
                            :
                            post && post?.elements.map((el: string | any, index: number) =>
                                <Elements path={path} key={index} el={el} setShowImage={setShowImage}/>
                            )
                        }
                    </IonList>
                </IonCard>
                {showImage && <Lightbox mainSrc={showImage} onCloseRequest={() => setShowImage(false)}/>}
            </IonContent
        ></IonPage>
    )
};

export default Post;
