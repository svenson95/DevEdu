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
import {useRouteMatch} from "react-router";
import './Subject.scss';

import {AuthContext} from "../../context/auth.context";
import {ErrorContext, SelectedPostContext} from "../../components/split-pane/Content";
import {LoadContext} from "../../../App";
import {PopoverCreatePost} from "../../components/Popover-CreatePost/Popover-CreatePost";
import {LoadingSpinner} from "../../components/Spinner";
import DataService from "../../services/data.service";

const subjectIds = [
    { name: "lf-1", id: "5f28ca7cc9913e382f197a29" },
    { name: "lf-2", id: "5f29f2f289a8dab4930b78aa" },
    { name: "lf-3", id: "5f29f5b389a8dab4930b78ab" },
    { name: "lf-4-1", id: "5f2a088189a8dab4930b78ad" },
    { name: "lf-4-2", id: "5f2a0f6e03a0b9fa8a59c412" },
    { name: "lf-5", id: "5f2a132e897d21240f53f372" },
    { name: "lf-6", id: "5f2a1333897d21240f53f373" },
    { name: "wiso", id: "5f2a178f25edda5b9f02c258" },
    { name: "englisch", id: "5f2a185825edda5b9f02c259" },
    { name: "deutsch", id: "5f2af921da91cece1215abee" }
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

        DataService.getSubject(subjectId!)
            .then(data => setSubject(data))
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));

        return () => setSubject(null);

    }, [path]);

    return (
        <IonPage id="main">
            <PopoverCreatePost
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
    const authContext = useContext(AuthContext);

    return (
        <IonCard>
            <div className="subjects__list">
                <IonList className="list">
                    <div className="header__wrapper">
                        <h1>Themen</h1>
                        {authContext?.user?.role === "admin" &&
                            <IonButton fill="outline" mode="md" onClick={() => props.setShowPopover(true)}>
                                <IonIcon slot="start" icon={add}/>
                            </IonButton>
                        }
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
                    <div className="header__wrapper">
                        <h1>Tests</h1>
                    </div>
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
