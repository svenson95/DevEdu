import React, {useContext, useEffect, useState} from "react";
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
import {LoadContext} from "../../split-pane/Content";

const Post = ({ ...props }) => {

    const [post, setPost] = useState(null as any);
    const [isDataArticle, setDataSource] = useState("local");
    const [showImage, setShowImage] = useState(false as any);

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
                                        <div key={index} className="article__element">
                                            <Elements el={el} setShowImage={setShowImage}/>
                                        </div>
                                    )
                                    :
                                    post && post?.elements.map((el: string | any, index: number) =>
                                        <div key={index} className="article__element">
                                            <Elements el={el} setShowImage={setShowImage}/>
                                        </div>
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

const Elements = ({ ...props }) => <>
    {props.el.type === "title" && <h2><Interweave content={props.el.content} /></h2>}
    {props.el.type === "subtitle" && <h3><Interweave content={props.el.content} /></h3>}
    {props.el.type === "text" && <p><Interweave content={props.el.content}/></p>}
    {props.el.type === "line" && <Interweave content={props.el.content}/>}
    {props.el.type === "quiz" &&
        <iframe
            src={props.el.content}
            title="quiz-frame"
        />
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
                    <tr className={"row" + index}>
                        {row.columns.map((column: any, index: number) =>
                            <>{row.type === "header" ?
                                <th className={`col${index} ${column.align}`}>
                                    <Interweave content={column.content}/>
                                </th>
                                :
                                <td className={`col${index} ${column.align}`}>
                                    <Interweave content={column.content}/>
                                </td>
                            }</>
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
</>

export default Post;
