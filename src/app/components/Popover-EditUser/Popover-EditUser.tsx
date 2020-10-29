import React, {useContext, useState} from "react";
import {
    IonBadge,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonPopover,
} from "@ionic/react";
import './Popover-EditUser.scss';

import {LoadContext} from "../../../App";
import AuthService from "../../services/auth.service";
import {AuthContext} from "../../context/auth.context";
import {ErrorContext} from "../../app-common/split-pane/Content";

const PopoverEditUser = ({ ...props }) => {

    const [name, setName] = useState(props.user?.name);
    const [email, setEmail] = useState(props.user?.email);
    // const [oldPassword, setOldPassword] = useState(null as any);
    const [newPassword, setNewPassword] = useState(null as any);

    const loadContext = useContext(LoadContext);
    const authContext = useContext(AuthContext);
    const errorContext = useContext(ErrorContext);

    async function patchObjectInDatabase() {

        let updatedUser = {
            "name": authContext?.user.name,
            "newName": name.toLowerCase(),
            "email": email,
            "password": (newPassword !== null) ? newPassword : props.user?.password
        };

        // TODO: if oldPassword === user.password (encrypt user.password) change password else show error

        await AuthService.editUser(updatedUser)
            .then(async res => {
                console.log(res);
                await AuthService.isAuthenticated().then(data => {
                    console.log(data);
                    authContext.setUser(data.user);
                    errorContext.setMessage('Benutzerdaten erfolgreich bearbeitet');
                });
            })
            .catch(error => {
                console.log(error);
                errorContext.setMessage(error);
            });
        return updatedUser;
    }

    async function confirmChanges() {
        loadContext.setLoading(true);
        await patchObjectInDatabase();
        loadContext.setLoading(false);
        props.setShowPopover(false);
    }

    return (
        <IonPopover
            isOpen={props.showPopover}
            cssClass="editUser__popover"
            onDidDismiss={() => props.setShowPopover(false)}
            mode="md"
        >
            <div className="editUser__card">
                <IonItem className="name__input">
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput
                        value={name}
                        onIonChange={e => setName(e.detail.value!)}
                    />
                    {name !== props.user?.name && <IonBadge>GEÄNDERT</IonBadge>}
                </IonItem>
                <IonItem className="email__input">
                    <IonLabel position="floating">E-Mail</IonLabel>
                    <IonInput
                        value={email}
                        onIonChange={e => setEmail(e.detail.value!)}
                    />
                    {email !== props.user?.email && <IonBadge>GEÄNDERT</IonBadge>}
                </IonItem>
                {/*<IonItem className="oldPassword__input">*/}
                {/*    <IonLabel position="floating">Altes Passwort</IonLabel>*/}
                {/*    <IonInput*/}
                {/*        value={oldPassword}*/}
                {/*        onIonChange={e => setOldPassword(e.detail.value! || null)}*/}
                {/*    />*/}
                {/*</IonItem>*/}
                <IonItem className="newPassword__input">
                    <IonLabel position="floating">Neues Passwort</IonLabel>
                    <IonInput
                        value={newPassword}
                        onIonChange={e => setNewPassword(e.detail.value! || null)}
                    />
                    {newPassword !== null && <IonBadge>GEÄNDERT</IonBadge>}
                </IonItem>
                <IonButton
                    fill="outline"
                    onClick={confirmChanges}
                >
                    Speichern
                </IonButton>
            </div>
        </IonPopover>
    )
};

export default PopoverEditUser;
