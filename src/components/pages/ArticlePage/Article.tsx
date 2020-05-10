import React from "react";
import {
    IonButton,
    IonButtons,
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

    return (
        <div className="article__card">
            <IonCard>
                <div className="article__list">
                    <IonList>
                        <div className="article__header__container">
                            <IonButtons slot="start">
                                <IonButton className="navigate__back__button" onClick={props.history.goBack}>
                                    ❮
                                </IonButton>
                                <h1>{articleTitle}</h1>
                            </IonButtons>
                        </div>
                        {article?.content.map((el: any, index: number) =>
                            <div key={index} className="article__element">
                                {el.type === "h2" && <h2>{el.content}</h2>}
                                {el.type === "text" && <p>{el.content}</p>}
                            </div>
                        )}
                    </IonList>
                </div>
            </IonCard>
        </div>
    )
};

export default Article;
