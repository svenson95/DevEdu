import React, {useEffect, useState, useLayoutEffect, useContext, useRef} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonPopover,
    IonSelect,
    IonSelectOption,
    IonSpinner,
} from "@ionic/react";
import {useHistory} from "react-router";
import {add} from "ionicons/icons";

import './Subject.scss';
import {ErrorContext, LoadContext, SelectedPostContext} from "../../split-pane/Content";
import {basePath, fetchData} from "../../../helper/http.service";

export function useWindowSize() {
    const [size, setSize] = useState([0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const subjectIds = [
    {
        name: "lf-1",
        id: "5ecebee69d83047876f87c1b"
    },
    {
        name: "lf-2",
        id: "5ecebf029d83047876f87c1c"
    },
    {
        name: "lf-3",
        id: "5ecebf139d83047876f87c1d"
    },
    {
        name: "lf-4-1",
        id: "5ecebf309d83047876f87c1e"
    },
    {
        name: "lf-4-2",
        id: "5ecec04c9d83047876f87c1f"
    },
    {
        name: "lf-5",
        id: "5ecec0639d83047876f87c20"
    },
    {
        name: "lf-6",
        id: "5ecec0a89d83047876f87c21"
    },
    {
        name: "wiso",
        id: "5ecec0b59d83047876f87c22"
    },
    {
        name: "englisch",
        id: "5ecec1299d83047876f87c23"
    },
    {
        name: "deutsch",
        id: "5ecfddd309b6302bbc146d31"
    }
];

const Subject = ({ ...props }) => {

    const [subject, setSubject] = useState(null as any);
    const [showPopover, setShowPopover] = useState(false);
    const [width] = useWindowSize();

    let loadContext = useContext(LoadContext);
    let errorContext = useContext(ErrorContext);

    useEffect(() => {
        const subjectId = subjectIds.find(el => el.name === props.match.url.substring(1))?.id;

        loadContext.setLoading(true);
        fetchData(basePath + "subjects/" + subjectId)
            .then(data => {
                setSubject(data)
            })
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));

        return () => setSubject(null);

    }, [props.match.url]);

    useEffect(() => {
        if (document.querySelector('.ios') || (width < 1000 && width !== 0)) {
            window.addEventListener('load', () => {
                const elements = document.getElementsByClassName('ion-activatable');

                while(elements.length) {
                    elements[0].classList.remove('ion-focusable');
                    elements[0].classList.remove('ion-activatable');
                }
            });
        }
    }, [subject, width]);

    return (
        <IonPage id="main">
            <Popover subject={subject} showPopover={showPopover} setShowPopover={setShowPopover}/>
            <IonContent>
                <div className="subject__container">
                    {loadContext.isLoading && !subject &&
                        <div className="spinner__wrapper">
                            <IonSpinner name="crescent"/>
                        </div>
                    }
                    {subject &&
                        <TopicCard
                            url={props.match.url}
                            subject={subject}
                            showPopover={showPopover}
                            setShowPopover={setShowPopover}
                        />
                    }
                    {subject?.tests &&
                        <TestCard
                            url={props.match.url}
                            subject={subject}
                            showPopover={showPopover}
                            setShowPopover={setShowPopover}
                        />
                    }
                </div>
            </IonContent>
        </IonPage>
    )
};

const TopicCard = ({ ...props }) => {
    const selectedPost = useContext(SelectedPostContext);

    return (
        <IonCard>
            <div className="subjects__list">
                <IonList className="list">
                    <div className="header__wrapper">
                        <h1>Themen</h1>
                        <IonButton fill="outline" onClick={() => props.setShowPopover(true)}>
                            <IonIcon slot="start" icon={add}/>
                        </IonButton>
                    </div>
                    {props.subject?.topics.map((topic: any, index: number) =>
                        <div key={index}>
                            <h2>{topic.title}</h2>
                            <ul>
                                {topic.links.map((post: any, index: number) =>
                                    <IonItem
                                        key={index}
                                        routerLink={props.url + "/" + post.url}
                                        routerDirection="forward"
                                        lines="none"
                                        detail={true}
                                        onClick={() => {
                                            selectedPost.setPostId(props.url + "/" + post.url);
                                            localStorage.setItem("selectedPost", JSON.stringify({
                                                title: post.title,
                                                description: post.description,
                                                url: props.url + "/" + post.url
                                            }))
                                        }}
                                    >
                                        <div className="element__wrapper">
                                            <div className="title">{post.title}</div>
                                            <div className="description">{post.description}</div>
                                        </div>
                                    </IonItem>
                                )}
                            </ul>
                        </div>
                    )}
                </IonList>
            </div>
        </IonCard>
    )
};

const TestCard = ({ ...props }) => (
    <IonCard>
        <div className="subjects__list">
            <IonList>
                <div>
                    <h1>Tests</h1>
                    <ul>
                        {props.subject?.tests.map((test: any, index: number) =>
                            <IonItem
                                key={index}
                                routerLink={props.url + "/" + test.url}
                                routerDirection="forward"
                                lines="none"
                                detail={true}
                            >
                                <div className="element__wrapper">
                                    <div className="title">{test.title}</div>
                                    <div className="description">{test.description}</div>
                                </div>
                            </IonItem>
                        )}
                    </ul>
                </div>
            </IonList>
        </div>
    </IonCard>
);

const Popover = ({ ...props }) => {

    const [articleTitle, setArticleTitle] = useState<string>();
    const [articleDescription, setArticleDescription] = useState<string>();
    const [articleTopic, setArticleTopic] = useState<string>();
    const [isNewTopic, setNewTopic] = useState(false);
    const textInput = useRef<any>();

    const history = useHistory();

    function focus() {
        setTimeout(() => {
            textInput.current.setFocus();
        }, 200);
    }

    return (
        <IonPopover
            isOpen={props.showPopover}
            cssClass="createPost__popover"
            onDidDismiss={() => props.setShowPopover(false)}
        >
            <div className="createPost__card">
                <IonItem>
                    <IonSelect
                        interface="popover"
                        placeholder="Typ"
                        onIonChange={e => setArticleTopic(e.detail.value)}
                    >
                        <IonSelectOption value="article">Artikel</IonSelectOption>
                        <IonSelectOption value="test">Test</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem className={isNewTopic ? "topic__input newTopic" : "topic__input hideInput"}>
                    <IonInput
                        placeholder="Thema"
                        ref={textInput}
                        onIonChange={e => setArticleTopic(e.detail.value!)}
                    />
                    <IonSelect
                        interface="popover"
                        placeholder="Topic"
                        onIonChange={e => {
                            if (e.detail.value! === "new") {
                                setNewTopic(true);
                                focus();
                                console.log(textInput.current);
                            } else {
                                setNewTopic(false)
                            }
                        }}
                        selectedText={isNewTopic ? " " : undefined}
                    >
                        {props.subject?.topics.map((text: any, index: number) =>
                            <IonSelectOption key={index} value={text}>
                                {text.title}
                            </IonSelectOption>
                        )}
                        <IonSelectOption value="new">
                            Neues Thema
                        </IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem className="title__input">
                    <IonLabel position="floating">Titel</IonLabel>
                    <IonInput
                        value={articleTitle}
                        onIonChange={e => setArticleTitle(e.detail.value!)}
                    />
                </IonItem>
                <IonItem className="description__input">
                    <IonLabel position="floating">Beschreibung</IonLabel>
                    <IonInput
                        value={articleDescription}
                        onIonChange={e => setArticleDescription(e.detail.value!)}
                    />
                </IonItem>
                <IonButton
                    fill="outline"
                    onClick={() => {
                        localStorage.setItem("newPost", JSON.stringify({
                            title: articleTitle,
                            description: articleDescription,
                            topic: articleTopic
                        }));
                        props.setShowPopover(false);
                        setArticleTitle(undefined);
                        setArticleDescription(undefined);
                        setArticleTopic(undefined);
                        setNewTopic(false);
                    }}
                    routerLink={history.location.pathname + "/createPost"}
                >
                    Speichern
                </IonButton>
            </div>
        </IonPopover>
    )
}

export default Subject;
