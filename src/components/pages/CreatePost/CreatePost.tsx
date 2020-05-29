import React, {useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonLabel,
    IonList,
    IonPage,
} from "@ionic/react";
import './CreatePost.scss';
import {Elements} from "../../Elements";

const CreatePost = ({ ...props }) => {

    const [text, setText] = useState([] as any);

    const newLine = {
        "type": "line",
        "content": "<hr/>"
    };

    const newParagraph = {
        "type": "text",
        "content": "Lorem ipsum"
    };

    const newList = {
        "type": "list",
        "content": "Liste:",
        "list": [
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        ]
    };


    useEffect(() => {
        setText([
            {
                "type": "title",
                "content": "Aufgabenstellung"
            },
            {
                "type": "text",
                "content": "Der entstehende Wirkstoff kann für 6€ / Mengeneinheit verkauft werden."
            },
            {
                "type": "list",
                "content": "Während des Herstellungsprozesses gehen aufgrund der Hitzeentwicklung 10% des eingesetzten Rohstoffes \"Beta-Interferon\" verloren. Die Einkaufspreise der Produktionsfaktoren betragen:",
                "list": [
                    "\"Beta-Interferon\" = 0,25€ / kg",
                    "Stromverbrauch = 0,08€ / kWh",
                    "Arbeitszeit = 25€ / Stunde"
                ]
            }
        ])
        console.log('standard text')
    }, []);

    return (
        <IonPage id="main">
            <IonCard className="utils__card">
                <div className="utils__wrapper">
                    <div className="utils__title">
                        <IonLabel>Werkzeuge</IonLabel>
                    </div>
                    <div className="button__wrapper">
                        {/*setText([...text, newLine])*/}
                        <IonButton fill="outline" onClick={() => setText([...text, newLine])}>
                            Linie
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setText([...text, newParagraph])}>
                            Text
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setText([...text, newList])}>
                            Liste
                        </IonButton>
                    </div>
                </div>
            </IonCard>
            <IonContent>
                <div className="article__container">
                    <IonCard>
                        <div className="article__list">
                            <IonList>
                                {text.map((el: string | any, index: number) =>
                                    <Elements key={index} el={el} />
                                )}
                            </IonList>
                        </div>
                    </IonCard>
                </div>
            </IonContent>
            <IonCard className="bottom__toolbar">
                <div className="utils__wrapper">
                    <div className="utils__title">
                    </div>
                    <div className="button__wrapper">
                        {/*setText([...text, newLine])*/}
                        <IonButton fill="outline" onClick={() => console.log("post saved")}>
                            Speichern
                        </IonButton>
                    </div>
                </div>
            </IonCard>
        </IonPage>
    )
};

export default CreatePost;
