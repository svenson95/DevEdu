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
import {AuthContext} from "../../App";
import {pages} from "../../data/menuTitles";

const Header = ({ ...props }) => {

    const [pageTitle, setPageTitle] = useState("-" as any);
    const authContext = useContext(AuthContext);

    const history = useHistory();
    const path = history.location.pathname;

    useEffect(() => {

        const subject = subjectPaths.find(el => path.startsWith(el));
        const pageItem = pages.find((el: any) => el.url.toLowerCase() === path);

        if (path.includes("/home")) {
            setPageTitle("Home");
        } else if (path.includes("/login")) {
            setPageTitle("Login");
        } else if (path.includes("/dashboard")) {
            setPageTitle("Dashboard");
        } else if (path.includes("/createPost")) {
            setPageTitle("Artikel erstellen")
        } else if (subject) {
            setPageTitle(pages.find(el => el.url === subject)?.title);
        } else {
            setPageTitle(pageItem?.title || "-");
        }
    }, [history.location.pathname, path]);

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
                        {authContext.authed?.isAuthenticated ?
                            <IonButton
                                className={"log__button " + (history.location.pathname === "/login" ? 'selected' : '')}
                                fill="clear"
                                disabled={false}
                                onClick={() => {
                                    localStorage.removeItem("devedu_token");
                                    history.push('/home');
                                    authContext.setAuthed(null);
                                    props.setMessage("Ausgeloggt");
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
