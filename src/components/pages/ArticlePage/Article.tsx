import React from "react";
import {
    IonCard,
    IonList,
} from "@ionic/react";
import {useRouteMatch} from "react-router";

import './Article.scss';
import {subjectsData} from "../../../data/subjectsData";
import {articleData} from "../../../data/articleData";

const Article = ({ ...props }) => {

    const { path } = useRouteMatch();
    const article = articleData.find(el => props.match.url.includes(el.url));

    const subject = subjectsData.find(el => path.includes(el.subject));
    const topics = subject?.topics.find(el => el.links.find(el => path.includes(el.url)));
    const articleTitle = topics?.links.find(link => path.includes(link.url))?.title;
    const articleDescription = topics?.links.find(link => path.includes(link.url))?.description;

    return (
        <div className="article__card">
            <IonCard>
                <div className="article__list">
                    <IonList>
                        <div className="article__header__container">
                            <div className="article__title">
                                <h1>{articleTitle}</h1>
                                <h4>{articleDescription}</h4>
                            </div>
                        </div>
                        {article?.content.map((el: string | any, index: number) =>
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
                                    </>
                                }
                            </div>
                        )}
                    </IonList>
                </div>
            </IonCard>
        </div>
    )
};

export default Article;
