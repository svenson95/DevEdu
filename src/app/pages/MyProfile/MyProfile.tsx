import React, {useContext, useEffect, useState} from "react";
import {
    IonBadge,
    IonButton,
    IonCard,
    IonContent,
    IonPage,
    IonToggle,
} from "@ionic/react";
import './MyProfile.scss';

import {AuthContext} from "../../context/auth.context";
import {ErrorContext, SearchPostContext} from "../../app-common/split-pane/Content";
import PopoverEditUser from "../../components/Popover-EditUser/Popover-EditUser";
import DataService from "../../services/data.service";
import {LoadContext} from "../../../App";
import AuthService from "../../services/auth.service";

const MyProfile = () => {
    const [showPopover, setShowPopover] = useState(false);
    const [progressPercentage, setProgressPercentage] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const authContext = useContext(AuthContext);
    const errorContext = useContext(ErrorContext);
    const searchPostContext = useContext(SearchPostContext);

    const titleCase = (string: string | unknown) => {
        if (typeof string !== "string") return;
        if (string === "email") return "E-Mail";
        return string[0].toUpperCase() + string.substr(1).toLowerCase();
    };

    useEffect(() => {
        loadContext.setLoading(true);
        DataService.getAllLessons()
            .then(postsArray => {
                setProgressPercentage(Math.round((authContext?.user.progress.length / postsArray.length * 100) * 10) / 10);
            })
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));
    }, []);

    function saveNewTheme() {
        let updatedUser = {
            "name": authContext?.user.name,
            "theme": authContext?.theme
        };
        loadContext.setLoading(true);
        AuthService.editUser(updatedUser)
            .then(() => {
                AuthService.isAuthenticated().then(data => {
                    authContext.setUser(data.user);
                    loadContext.setLoading(false);
                    errorContext.setMessage("Neues Standard-Theme gespeichert");
                })
            })
            .catch(error => {
                console.log(error);
                errorContext.setMessage(error);
                loadContext.setLoading(false);
            });
    }

    return (
        <IonPage id="main">
            <PopoverEditUser
                user={authContext.user}
                showPopover={showPopover}
                setShowPopover={setShowPopover}
            />
            <IonContent className={searchPostContext.isSearching_mobile ? "mobile-search-content--open" : ""}>
                <IonCard className="profile-card">
                    <div className="header__wrapper">
                        <h1>Benutzerdaten</h1>
                    </div>
                    <div className="profile-content">
                        <div className="content-row">
                            <p className="key" id="name-key">Name</p>
                            <p className="value" id="name-val">{titleCase(authContext.user?.name)}</p>
                        </div>
                        <div className="content-row">
                            <p className="key" id="email-key">E-Mail</p>
                            <p className="value" id="email-val">{authContext.user?.email}</p>
                        </div>
                        <div className="content-row">
                            <p className="key" id="role-key">Gruppe</p>
                            <p className="value" id="role-val">{titleCase(authContext.user?.role)}</p>
                        </div>
                        <div className="content-row">
                            <p className="key" id="progress-key">Fortschritt</p>
                            <p className="value" id="progress-val">{progressPercentage !== null ? progressPercentage : "..."}%</p>
                        </div>
                        <div className="content-row">
                            <p className="key" id="progress-key">Standard-Theme</p>
                            <p className="value" id="progress-val">
                                <span className={authContext.theme === "dark" ? "light-label" : "light-label highlighted"}>
                                    Light
                                </span>
                                <IonToggle mode="md" checked={authContext.theme === "dark"} onClick={() => {
                                    if (authContext.theme === "dark") {
                                        authContext.setTheme("light");
                                        document.getElementById('root')?.classList.add('light-theme');
                                    } else if (authContext.theme === "light") {
                                        authContext.setTheme("dark");
                                        document.getElementById('root')?.classList.remove('light-theme');
                                    }
                                }}/>
                                <span className={authContext.theme === "light" ? "dark-label" : "dark-label highlighted"}>
                                    Dark
                                </span>
                                {authContext.theme !== authContext.user.theme && <IonBadge onClick={saveNewTheme}>SPEICHERN</IonBadge>}
                            </p>
                        </div>
                    </div>
                    <div className="buttons">
                        <IonButton className="edit-user-btn button text-button" fill="outline" mode="md" onClick={() => setShowPopover(true)}>
                            <p>Daten ändern</p>
                        </IonButton>
                    </div>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default MyProfile;
