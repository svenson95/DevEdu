import React, {useEffect, useState, useContext} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonIcon,
    IonItem,
    IonList,
    IonPage,
} from "@ionic/react";
import {add} from "ionicons/icons";

import './Subject.scss';
import {ErrorContext, SelectedPostContext} from "../../components/split-pane/Content";
import {LoadContext} from "../../../App";
import {basePath, fetchData} from "../../services/http.service";
import {Popover} from "../../components/Popover";
import {LoadingSpinner} from "../../components/Spinner";
import {useRouteMatch} from "react-router";

const subjectIds = [
    { name: "lf-1", id: "5ecebee69d83047876f87c1b" },
    { name: "lf-2", id: "5ecebf029d83047876f87c1c" },
    { name: "lf-3", id: "5ecebf139d83047876f87c1d" },
    { name: "lf-4-1", id: "5ecebf309d83047876f87c1e" },
    { name: "lf-4-2", id: "5ecec04c9d83047876f87c1f" },
    { name: "lf-5", id: "5ecec0639d83047876f87c20" },
    { name: "lf-6", id: "5ecec0a89d83047876f87c21" },
    { name: "wiso", id: "5ecec0b59d83047876f87c22" },
    { name: "englisch", id: "5ecec1299d83047876f87c23" },
    { name: "deutsch", id: "5ecfddd309b6302bbc146d31" }
];

export const Subject = ({ ...props }) => {

    const [subject, setSubject] = useState(null as any);
    const [showPopover, setShowPopover] = useState(false);
    const { path } = useRouteMatch();

    const subjectId = subjectIds.find(el => el.name === path.substring(1))?.id;

    let loadContext = useContext(LoadContext);
    let errorContext = useContext(ErrorContext);

    useEffect(() => {
        loadContext.setLoading(true);
        fetchData(basePath + "subjects/" + subjectId)
            .then(data => setSubject(data))
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));

        return () => setSubject(null);

    }, [path]);

    return (
        <IonPage id="main">
            <Popover
                subject={subject}
                subjectId={subjectId}
                showPopover={showPopover}
                setShowPopover={setShowPopover}
            />
            <IonContent>
                <div className="subject__container">
                    {loadContext.isLoading && !subject && <LoadingSpinner/>}
                    {subject &&
                        <TopicCard
                            url={path}
                            subject={subject}
                            showPopover={showPopover}
                            setShowPopover={setShowPopover}
                        />
                    }
                    {subject?.tests &&
                        <TestCard
                            url={path}
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
                        <div className="subjects__topic" key={index}>
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
                                onClick={() => {
                                    localStorage.setItem("selectedPost", JSON.stringify({
                                        title: test.title,
                                        description: test.description,
                                        url: props.url + "/" + test.url
                                    }))
                                }}
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
