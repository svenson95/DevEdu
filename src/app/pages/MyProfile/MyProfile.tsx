import React, {useContext, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonPage,
} from "@ionic/react";
import './MyProfile.scss';

import {AuthContext} from "../../context/auth.context";
import {SearchPostContext} from "../../components/split-pane/Content";
import PopoverEditUser from "../../components/Popover-EditUser/Popover-EditUser";

const MyProfile = () => {
    const [showPopover, setShowPopover] = useState(false);
    const authContext = useContext(AuthContext);
    const searchPostContext = useContext(SearchPostContext);

    const titleCase = (string: string | unknown) => {
        if (typeof string !== "string") return;
        if (string === "email") return "E-Mail";
        return string[0].toUpperCase() + string.substr(1).toLowerCase();
    };

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
                            <p className="value" id="progress-val">30%</p>
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
