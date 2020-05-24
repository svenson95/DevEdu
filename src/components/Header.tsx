import React, {useContext, useEffect, useState} from "react";
import {
    IonButton,
    IonHeader,
    IonIcon,
    IonMenuToggle,
    IonToolbar
} from "@ionic/react";
import {useHistory} from "react-router";
import {bookOutline, logInOutline, logOutOutline} from "ionicons/icons";
import {subjectPaths} from "./split-pane/Content";
import {AuthContext} from "../App";
import {pages} from "../data/menuTitles";

const Header = ({ ...props }) => {

    const [pageTitle, setPageTitle] = useState("-" as any);
    const authContext = useContext(AuthContext);

    const history = useHistory();
    const path = history.location.pathname;

    useEffect(() => {

        const subject = subjectPaths.find(el => path.startsWith(el));
        const pageItem = pages.find((el: any) => el.url.toLowerCase() === path);

        if (path.startsWith("/start")) {
            setPageTitle("Start");
        } else if (path.startsWith("/login")) {
            setPageTitle("Login");
        } else if (path.includes("/createPost")) {
            setPageTitle("Artikel erstellen")
        } else if (subject) {
            setPageTitle(pages.find(el => el.url === subject)?.title);
        } else {
            setPageTitle(pageItem?.title || "-");
        }
    }, [history.location.pathname]);

    return (
        <IonHeader>
            <IonToolbar>
                <div className="title__wrapper">
                    <IonMenuToggle>
                        <IonButton
                            className={"logo__button " + (history.location.pathname === "/start" ? 'selected' : '')}
                            fill="outline"
                        >
                            <IonIcon slot="start" icon={bookOutline} />
                        </IonButton>
                    </IonMenuToggle>
                    <h1>{pageTitle}</h1>
                    <div className="buttons__wrapper">
                        <IonButton className="navigate__back__button" fill="clear" onClick={history.goBack}>
                            ❮
                        </IonButton>
                        {authContext.authed === "true" ?
                            <IonButton
                                className={"log__button " + (history.location.pathname === "/login" ? 'selected' : '')}
                                fill="clear"
                                disabled={false}
                                onClick={() => {
                                    localStorage.clear();
                                    authContext.setAuthed("false");
                                    console.log(authContext.authed);
                                    props.setShowToast(true);
                                }}
                            >
                                <IonIcon slot="start" icon={logOutOutline} />
                            </IonButton>
                            :
                            <IonButton
                                className="log__button"
                                fill="clear"
                                routerLink="/login"
                                disabled={path.startsWith("/login")}
                            >
                                <IonIcon slot="start" icon={logInOutline} />
                            </IonButton>
                        }
                    </div>
                </div>
            </IonToolbar>
        </IonHeader>
    )
};

export default Header;
