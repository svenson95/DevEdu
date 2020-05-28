import React, {useContext, useEffect, useState, Fragment} from "react";
import {
    IonCard,
    IonContent,
    IonList,
    IonPage,
    IonSpinner,
} from "@ionic/react";
import {useRouteMatch} from "react-router";

import Interweave from 'interweave';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import './Post.scss';
import {subjectsData} from "../../../data/subjectsData";
import {articleData} from "../../../data/posts/articleData";
import {ErrorContext, LoadContext, SelectedPostContext} from "../../split-pane/Content";
import {basePath, fetchData} from "../../../helper/http.service";

const Post = ({ ...props }) => {

    const [post, setPost] = useState(null as any);
    const [postUrl, setPostUrl] = useState(localStorage.getItem("selectedPost"));
    const [isDataArticle, setDataSource] = useState("local");
    const [showImage, setShowImage] = useState(false as any);

    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const selectedPost = useContext(SelectedPostContext);
    const { path } = useRouteMatch();

    const article2 = articleData.find(el => props.match.url.includes(el.url));
    const subject = subjectsData.find(el => path.includes(el.subject));
    const topic = subject?.topics.find(el => el.links.find(el => path.includes(el.url)));
    const articleTitle = topic?.links.find(link => path.includes(link.url))?.title;
    const articleDescription = topic?.links.find(link => path.includes(link.url))?.description;
    const testTitle = subject?.tests?.find(el => path.includes(el.url))?.title;
    const testDescription = subject?.tests?.find(el => path.includes(el.url))?.description;

    useEffect(() => {
        return () => localStorage.removeItem("selectedPost");
    }, []);

    useEffect(() => {
        setPostUrl(selectedPost.postId || localStorage.getItem("selectedPost"))
    }, [selectedPost]);

    useEffect(() => {

        if (
            path.startsWith("/lf-1/") ||
            path === "/lf-2/geschaeftsprozesse_und_betriebliche_organisation/aufgaben_des_projektmanagements"
        ) {
            loadContext.setLoading(true);
            setDataSource("server");

            loadContext.setLoading(true);
            fetchData(basePath + "posts" + postUrl)
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
            <IonContent>
                <div className="article__container">
                    <IonCard>
                        <div className="article__list">
                            <IonList>
                                <div className="article__header__container">
                                    <div className="article__title">
                                        <h1>{post?.title || articleTitle || testTitle}</h1>
                                        <h4>{articleDescription || testDescription}</h4>
                                    </div>
                                </div>
                                {loadContext.isLoading && !post && <div className="spinner__wrapper"><IonSpinner/></div>}
                                {isDataArticle === "local" ?
                                    article2?.elements.map((el: string | any, index: number) =>
                                        <Elements key={index} el={el} setShowImage={setShowImage}/>
                                    )
                                    :
                                    post && post?.elements.map((el: string | any, index: number) =>
                                        <Elements key={index} el={el} setShowImage={setShowImage}/>
                                    )
                                }
                            </IonList>
                        </div>
                    </IonCard>
                </div>
                {showImage && (
                    <Lightbox
                        mainSrc={showImage}
                        onCloseRequest={() => setShowImage(false)}
                    />
                )}
            </IonContent
        ></IonPage>
    )
};

const Elements = ({ ...props }) =>
    <div className="article__element">
        {props.el.type === "title" && <h2><Interweave content={props.el.content} /></h2>}
        {props.el.type === "subtitle" && <h3><Interweave content={props.el.content} /></h3>}
        {props.el.type === "text" && <p><Interweave content={props.el.content}/></p>}
        {props.el.type === "line" && <Interweave content={props.el.content}/>}
        {props.el.type === "quiz" && <iframe src={props.el.content} title="quiz-frame"/>
        }
        {props.el.type === "image" && (
            <div onClick={() => props.setShowImage(props.el.content)} >
                <img alt="post_image" src={props.el.content} className="element__image" />
            </div>
        )}
        {props.el.type === "table" &&
            <div className="table__wrapper">
                <table className="inline">
                    <tbody>
                    {props.el.rows.map((row: any, index: number) =>
                        <tr key={index} className={"row" + index}>
                            {row.columns.map((column: any, index: number) =>
                                <Fragment key={index}>
                                    {row.type === "header" ?
                                        <th className={`col${index} ${column.align}`}>
                                            <Interweave content={column.content}/>
                                        </th>
                                        :
                                        <td className={`col${index} ${column.align}`}>
                                            <Interweave content={column.content}/>
                                        </td>
                                    }
                                </Fragment>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        }
        {props.el.type === "list" &&
            <ul>
                <p><Interweave content={props.el.content} /></p>
                {props.el.list?.map((listItem: any, index: number) =>
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
    </div>;

export default Post;
