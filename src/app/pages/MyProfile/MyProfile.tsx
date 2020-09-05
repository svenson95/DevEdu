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
import {ErrorContext, SearchPostContext} from "../../components/split-pane/Content";
import PopoverEditUser from "../../components/Popover-EditUser/Popover-EditUser";
import DataService from "../../services/data.service";
import {LoadContext} from "../../../App";
import AuthService from "../../services/auth.service";

const MyProfile = () => {
    const [showPopover, setShowPopover] = useState(false);
    const [progressPercentage, setProgressPercentage] = useState(null as any);
    const [toggleValue, setToggleValue] = useState("");
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
        setToggleValue(authContext?.user.theme);

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
            "_id": authContext.user._id,
            "name": authContext.user.name,
            "email": authContext.user.email,
            "password": authContext.user.password,
            "progress": authContext.user.progress,
            "role": authContext.user.role,
            "theme": toggleValue
            // "password": (oldPassword !== null && newPassword !== null) ? newPassword : props.user?.password
        };
        loadContext.setLoading(true);
        AuthService.editUser(updatedUser)
            .then(res => errorContext.setMessage("Neues Standard-Theme gespeichert"))
            .catch(error => console.log(error))
            .finally(() => loadContext.setLoading(false));
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
                                <span className="light-label">Light</span>
                                <IonToggle checked={toggleValue === "dark"} onIonChange={() => {
                                    toggleValue === "dark" ? setToggleValue("light") : setToggleValue("dark");
                                }}/>
                                <span className="dark-label">Dark</span>
                                {authContext.user.theme !== toggleValue && <IonBadge onClick={saveNewTheme}>SPEICHERN</IonBadge>}
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
