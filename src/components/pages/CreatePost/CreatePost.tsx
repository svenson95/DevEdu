import React, {useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonList,
    IonPage,
    IonProgressBar,
} from "@ionic/react";
import './CreatePost.scss';

const CreatePost = ({ ...props }) => {

    const [article, setArticle] = useState(null as any);

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
                                <div className="header__wrapper">
                                    <h1>Themen</h1>
                                    <div className="button__wrapper">
                                        <IonButton fill="outline">
                                            Paragraph
                                        </IonButton>
                                        <IonButton fill="outline">
                                            Liste
                                        </IonButton>
                                    </div>
                                </div>
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
                                </div>
                            </IonList>
                        </div>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    )
};

export default CreatePost;
