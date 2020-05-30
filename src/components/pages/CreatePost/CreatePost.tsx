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

import {Elements} from "../../Elements/Elements";
import {newImage, newLine, newList, newSubtitle, newTable, newText, newTitle} from "./PostExamples";

const CreatePost = ({ ...props }) => {

    const title = JSON.parse(localStorage.getItem("newPost")!);
    const [text, setText] = useState([] as any);

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
        ]);

        return () => localStorage.removeItem("newPost");
    }, []);

    return (
        <IonPage id="main">
            <IonCard className="utils__card">
                <div className="utils__wrapper">
                    <div className="utils__title">
                        <IonLabel>Werkzeuge</IonLabel>
                    </div>
                    <div className="button__wrapper">
                        <IonButton fill="outline" onClick={() => setText([...text, newText])}>
                            Text
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setText([...text, newTitle])}>
                            Title
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setText([...text, newSubtitle])}>
                            Subtitle
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setText([...text, newImage])}>
                            Image
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setText([...text, newLine])}>
                            Linie
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setText([...text, newList])}>
                            Liste
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setText([...text, newTable])}>
                            Tabelle
                        </IonButton>
                    </div>
                </div>
            </IonCard>
            <IonContent className="article__content">
                <IonCard className="newPost__card">
                    <IonList className="article__list">
                        <div className="article__header">
                            <h1>{title.title || "Titel"}</h1>
                            <h4>{title.description || "Mitschrift vom 00.00.0000"}</h4>
                        </div>
                        {text.map((el: string | any, index: number) =>
                            <Elements
                                key={index}
                                elements={text}
                                el={el}
                                setElements={setText}
                                isEditable={true}
                            />
                        )}
                    </IonList>
                </IonCard>
            </IonContent>
            <IonCard className="bottom__toolbar">
                <div className="button__wrapper">
                    <IonButton fill="outline" onClick={() => console.log("post saved")}>
                        Speichern
                    </IonButton>
                </div>
            </IonCard>
        </IonPage>
    )
};

export default CreatePost;
