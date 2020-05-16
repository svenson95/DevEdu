import React, {useContext, useEffect, useState} from "react";
import {
    IonCard,
    IonContent,
    IonList,
    IonPage,
    IonProgressBar,
    IonSpinner,
} from "@ionic/react";
import {useRouteMatch} from "react-router";

import './Post.scss';
import {subjectsData} from "../../../data/subjectsData";
import {articleData} from "../../../data/articleData";
import {LoadContext} from "../../split-pane/Content";

const Post = ({ ...props }) => {

    const [article, setArticle] = useState(null as any);
    const [isDataArticle, setDataSource] = useState("local");
    const loadContext = useContext(LoadContext);
    const { path } = useRouteMatch();
    const article2 = articleData.find(el => props.match.url.includes(el.url));

    const subject = subjectsData.find(el => path.includes(el.subject));
    const topic = subject?.topics.find(el => el.links.find(el => path.includes(el.url)));
    const articleTitle = topic?.links.find(link => path.includes(link.url))?.title;
    const articleDescription = topic?.links.find(link => path.includes(link.url))?.description;

    useEffect(() => {

        if (path === "/lf-2/aufgaben_des_projektmanagements") {
            loadContext.setLoading(true);
            fetch("http://159.65.105.150:3000/posts")
                .then(async response => {

                    if (response.ok) {
                        const json = await response.json();
                        console.log(...json);
                        setDataSource("server");
                        setArticle([...json]);
                        loadContext.setLoading(false);
                    } else {
                        throw new Error('Response not ok');
                    }
                })
        } else {
            setDataSource("local");
            loadContext.setLoading(false);
        }

        return () => {
            setArticle(null);
            setDataSource("local");
        }

    }, [path]);

    return (
        <IonPage id="main">
            <IonContent>
                <div className="article__container">
                    <IonCard>
                        <div className="article__list">
                            <IonList>
                                <div className="article__header__container">
                                    <div className="article__title">
                                        <div className="title__progress__wrapper">
                                            <h1>{article?.title || articleTitle}</h1>
                                            <div className="article__progress__wrapper">
                                                <IonProgressBar
                                                    className="article__progressbar"
                                                    value={0}
                                                    type={loadContext.isLoading ? "indeterminate" : "determinate"}
                                                />
                                            </div>
                                        </div>
                                        <h4>{articleDescription}</h4>
                                    </div>
                                </div>
                                {loadContext.isLoading && !article &&
                                    <div className="spinner__wrapper"><IonSpinner/></div>
                                }
                                {isDataArticle === "local" ?
                                    article2?.elements.map((el: string | any, index: number) =>
                                        <div key={index} className="article__element">
                                            {el.type === "title" && <h2>{el.content}</h2>}
                                            {el.type === "subtitle" && <h3>{el.content}</h3>}
                                            {el.type === "text" && <p>{el.content}</p>}
                                            {el.type === "list" && <>
                                                <p>{el.content}</p>
                                                <ul>
                                                    {el.list.map((listItem: any, index: number) =>
                                                        <li key={index}>
                                                            {listItem}
                                                        </li>
                                                    )}
                                                </ul>
                                            </>}
                                        </div>
                                    )
                                    :
                                    article?.elements.map((el: string | any, index: number) =>
                                        <div key={index} className="article__element">
                                            {el.type === "title" && <h2>{el.content}</h2>}
                                            {el.type === "subtitle" && <h3>{el.content}</h3>}
                                            {el.type === "text" && <p>{el.content}</p>}
                                            {el.type === "list" && <>
                                                <p>{el.content}</p>
                                                <ul>
                                                    {el.list.map((listItem: any, index: number) =>
                                                        <li key={index}>
                                                            {listItem}
                                                        </li>
                                                    )}
                                                </ul>
                                            </>}
                                        </div>
                                    )
                                }
                            </IonList>
                        </div>
                    </IonCard>
                </div>
            </IonContent
        ></IonPage>
    )
};

export default Post;
