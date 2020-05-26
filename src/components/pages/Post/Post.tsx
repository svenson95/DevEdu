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
import Interweave from 'interweave';

import './Post.scss';
import {subjectsData} from "../../../data/subjectsData";
import {articleData} from "../../../data/posts/articleData";
import {LoadContext} from "../../split-pane/Content";

const Post = ({ ...props }) => {

    const [post, setPost] = useState(null as any);
    const [isDataArticle, setDataSource] = useState("local");
    const loadContext = useContext(LoadContext);
    const { path } = useRouteMatch();
    const article2 = articleData.find(el => props.match.url.includes(el.url));

    const subject = subjectsData.find(el => path.includes(el.subject));
    const topic = subject?.topics.find(el => el.links.find(el => path.includes(el.url)));
    const articleTitle = topic?.links.find(link => path.includes(link.url))?.title;
    const articleDescription = topic?.links.find(link => path.includes(link.url))?.description;
    const testTitle = subject?.tests?.find(el => path.includes(el.url))?.title;
    const testDescription = subject?.tests?.find(el => path.includes(el.url))?.description;

    useEffect(() => {

        if (path === "/lf-2/geschaeftsprozesse_und_betriebliche_organisation/aufgaben_des_projektmanagements") {
            loadContext.setLoading(true);
            setDataSource("server");
            fetch("http://159.65.105.150:3000/posts/lf-2")
                .then(async response => {
                    if (response.ok) {
                        const json = await response.json();
                        setPost(json[0]);
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
            setPost(null);
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
                                            <h1>{post?.title || articleTitle || testTitle}</h1>
                                        </div>
                                        <h4>{articleDescription || testDescription}</h4>
                                    </div>
                                </div>
                                {loadContext.isLoading && !post &&
                                    <div className="spinner__wrapper"><IonSpinner/></div>
                                }
                                {isDataArticle === "local" ?
                                    article2?.elements.map((el: string | any, index: number) =>
                                        <div key={index} className="article__element">
                                            {el.type === "title" && <h2><Interweave content={el.content} /></h2>}
                                            {el.type === "subtitle" && <h3><Interweave content={el.content} /></h3>}
                                            {el.type === "text" && <p><Interweave content={el.content}/></p>}
                                            {el.type === "line" && <Interweave content={el.content}/>}
                                            {el.type === "image" && <img src={el.content} className="element__image"/>}
                                            {el.type === "list" &&
                                                <ul>
                                                    <p><Interweave content={el.content} /></p>
                                                    {el.list?.map((listItem: any, index: number) =>
                                                        <li key={index}>
                                                            <Interweave content={listItem.content || listItem}/>
                                                            {listItem.sublist && <>
                                                                <ul>
                                                                    {listItem.sublist.map((item: any, index: number) =>
                                                                        <li key={index} className="list__second">
                                                                            <Interweave content={item}/>
                                                                        </li>
                                                                    )}
                                                                </ul>
                                                            </>}
                                                        </li>
                                                    )}
                                                </ul>
                                            }
                                        </div>
                                    )
                                    :
                                    post && post?.elements.map((el: string | any, index: number) =>
                                        <div key={index} className="article__element">
                                            {el.type === "title" && <h2>{el.content}</h2>}
                                            {el.type === "subtitle" && <h3>{el.content}</h3>}
                                            {el.type === "text" && <p><Interweave content={el.content}/></p>}
                                            {el.type === "line" && <Interweave content={el.content}/>}
                                            {el.type === "quiz" && <Interweave content={el.content}/>}
                                            {el.type === "image" && <img src={el.content} className="element__image"/>}
                                            {el.type === "list" &&
                                                <ul>
                                                    <p><Interweave content={el.content}/></p>
                                                    {el.list.map((listItem: any, index: number) =>
                                                        <li key={index}>
                                                            <Interweave content={listItem}/>
                                                            {listItem.sublist && <>
                                                                {listItem.sublist.map((item: any, index: number) =>
                                                                    <li key={index} className="list__second">
                                                                        <Interweave content={item}/>
                                                                    </li>
                                                                )}
                                                            </>}
                                                        </li>
                                                    )}
                                                </ul>
                                            }
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
