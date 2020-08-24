import React, {useContext, useEffect, useState} from "react";
import {
    IonAlert,
    IonButton,
    IonHeader,
    IonIcon,
    IonMenuToggle,
    IonSearchbar,
    IonToolbar
} from "@ionic/react";
import {useHistory} from "react-router";
import {
    bookOutline,
    logInOutline,
    logOutOutline,
    personCircleOutline,
    searchCircle
} from "ionicons/icons";

import {AuthContext} from "../context/auth.context";
import AuthService from "../services/auth.service";
import {pages} from "../../data/menuTitles";

const Header = ({ ...props }) => {

    const [pageTitle, setPageTitle] = useState(null as any);
    const [text, setText] = useState("" as any);
    const authContext = useContext(AuthContext);

    const history = useHistory();
    const path = history.location.pathname;
    const page = pages.find((el: any) => path.includes(el.url));

    useEffect(() => {

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
        } else {
            setPageTitle(page?.title || "-");
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
    }, [path]);

    useEffect(() => {
        document.title = pageTitle ? "Deedu - " + (page?.shortTitle || pageTitle) : "Deedu";
    }, [pageTitle]);

    const [showLogoutAlert, setShowLogoutAlert] = useState(false);

    return (
        <IonHeader>
            <IonAlert
                isOpen={showLogoutAlert}
                onDidDismiss={() => setShowLogoutAlert(false)}
                cssClass='logout-alert'
                header={'Logout'}
                // subHeader={'Bist du sicher dass du dich abmelden möchtest?'}
                message={'Bist du sicher dass du dich abmelden möchtest?'}
                buttons={[
                    {
                        text: 'Abbrechen',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            setShowLogoutAlert(false);
                        }
                    },
                    {
                        text: 'Ausloggen',
                        handler: () => {
                            AuthService.logout().finally(() => {
                                authContext.setAuthenticated(false);
                                authContext.setUser(null);
                                setShowLogoutAlert(false);
                                props.setMessage("Ausgeloggt");
                            });
                        }
                    }
                ]}
            />
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
                    <IonSearchbar value={text}
                                  showCancelButton="focus"
                                  placeholder="Suchen"
                                  debounce={700}
                                  onIonChange={e => {
                                      setText(e.detail.value!);
                                      if (e.detail.value! !== "") {
                                          props.setSearchText(e.detail.value!);
                                          props.setSearching(true);
                                      } else {
                                          props.setSearchText("");
                                          props.setSearchResults(null);
                                          props.setSearching(false);
                                      }
                                  }}
                                  onClick={() => {
                                      if (props.searchText !== "" && props.searchResults !== null) {
                                          props.setSearching(true);
                                      }
                                  }}>
                    </IonSearchbar>
                    <h1>{pageTitle}</h1>
                    <div className="buttons-wrapper">
                        {props.windowSize.width < 600 &&
                            <IonButton id="search-post-button" fill="clear" onClick={() => props.setSearching_mobile(!props.isSearching_mobile)}>
                                <IonIcon slot="start" icon={searchCircle}/>
                                <p id="hover-text"><span>Suchen</span></p>
                            </IonButton>
                        }
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
                                    setShowLogoutAlert(true);
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
