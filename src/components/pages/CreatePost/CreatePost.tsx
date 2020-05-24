import React, {useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonList,
    IonPage,
    IonProgressBar,
    IonTextarea,
} from "@ionic/react";
import './CreatePost.scss';

const CreatePost = ({ ...props }) => {

    const [article, setArticle] = useState(null as any);
    const [text, setText] = useState([] as any);

    const newParagraph = {
        type: 'paragraph',
        children: [
            { text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' },
        ],
    };

    const newList = {
        type: 'list',
        children: [
            { text: '<li>Test1</li>' },
            { text: '<li>Test2</li>' },
            { text: '<li>Test3</li>' },
        ],
    };

    useEffect(() => {

        console.log(props);

    }, []);

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
                                            <h1>Neuer Artikel</h1>
                                            <div className="article__progress__wrapper">
                                                <IonProgressBar
                                                    className="article__progressbar"
                                                    value={0}
                                                    type={"determinate"}
                                                />
                                            </div>
                                        </div>
                                        <h4>Lernfeld 1</h4>
                                    </div>
                                    <div className="button__wrapper">
                                        <IonButton fill="outline" onClick={() => setText([text, newParagraph])}>
                                            Text
                                        </IonButton>
                                        <IonButton fill="outline">
                                            Liste
                                        </IonButton>
                                    </div>
                                </div>
                                {text.map((el: string | any, index: number) =>
                                    <div key={index} className="article__element">
                                        {el.type === "title" && <h2>{el.content}</h2>}
                                        {el.type === "subtitle" && <h3>{el.content}</h3>}
                                        {el.type === "text" && <p>{el.content}</p>}
                                        {el.type === "list" && <>
                                            <p>{el.content}</p>
                                            <ul>
                                                {el.list?.map((listItem: any, index: number) =>
                                                    <li key={index}>
                                                        {listItem}
                                                    </li>
                                                )}
                                            </ul>
                                        </>}
                                    </div>
                                )}
                            </IonList>
                        </div>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    )
};

export default CreatePost;
