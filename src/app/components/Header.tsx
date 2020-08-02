import React, {useContext, useEffect, useState} from "react";
import {
    IonButton,
    IonHeader,
    IonIcon,
    IonMenuToggle,
    IonToolbar
} from "@ionic/react";
import {useHistory} from "react-router";
import {
    chevronBackCircleOutline,
    bookOutline,
    logInOutline,
    logOutOutline,
    personCircleOutline
} from "ionicons/icons";

import {subjectPaths} from "./split-pane/Content";
import {AuthContext} from "../context/auth.context";
import AuthService from "../services/auth.service";
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
        } else if (path.includes("/my-profile")) {
            setPageTitle("Mein Profil")
        } else if (subject) {
            setPageTitle(pages.find(el => el.url === subject)?.title);
        } else {
            setPageTitle(pageItem?.title || "-");
        }

        const backButton = document.getElementById('navigate-back-button');
        const profileButton = document.getElementById('my-profile-button');
        const logButton = document.getElementById('log-button');
        const text = document.getElementById('hover-text');
        backButton?.addEventListener('mouseover', () => text!.children[0].innerHTML = "Zurück");
        profileButton?.addEventListener('mouseover', () => text!.children[0].innerHTML = "Mein Profil");
        logButton?.addEventListener('mouseover', () => text!.children[0].innerHTML = authContext.isAuthenticated ? "Logout" : "Login");
        backButton?.addEventListener('mouseout', mouseOut);

        function mouseOut() {
            text!.children[0].innerHTML = ""
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
                    <div className="buttons-wrapper">
                        <IonButton id="navigate-back-button" fill="clear" onClick={history.goBack}>
                            <IonIcon slot="start" icon={chevronBackCircleOutline} />
                            <p id="hover-text"><span>Test</span></p>
                        </IonButton>
                        {authContext.isAuthenticated &&
                            <IonButton className={"my-profile-button " + (history.location.pathname === "/my-profile" ? 'selected' : '')}
                                       id="my-profile-button"
                                       fill="clear"
                                       routerLink="/my-profile">
                                <IonIcon slot="start" icon={personCircleOutline}/>
                                <p id="hover-text"><span>Mein Profil</span></p>
                            </IonButton>
                        }
                        {authContext.isAuthenticated ?
                            <IonButton
                                className={"log-button " + (history.location.pathname === "/login" ? 'selected' : '')}
                                id="log-button"
                                fill="clear"
                                disabled={false}
                                onClick={() => {
                                    AuthService.logout().finally(() => {
                                        authContext.setUser(null);
                                        authContext.setAuthenticated(false);
                                        props.setMessage("Ausgeloggt");
                                    });
                                }}
                            >
                                <IonIcon slot="start" icon={logOutOutline} />
                                <p id="hover-text"><span>Logout</span></p>
                            </IonButton>
                            :
                            <IonButton
                                id="log-button"
                                fill="clear"
                                routerLink="/login"
                                disabled={path.startsWith("/login")}
                            >
                                <IonIcon slot="start" icon={logInOutline} />
                                <p id="hover-text"><span>Login</span></p>
                            </IonButton>
                        }
                    </div>
                </div>
            </IonToolbar>
        </IonHeader>
    )
};

export default Header;
