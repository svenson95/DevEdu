import React from "react";
import {
    IonAlert,
} from "@ionic/react";
import './Alert-DeletePost.scss';

const AlertDeletePost = ({ ...props }) => {
    return (
        <IonAlert
            isOpen={props.showDeleteAlert}
            onDidDismiss={() => props.setShowDeleteAlert(false)}
            cssClass='delete-alert'
            header={'Delete'}
            // subHeader={'Bist du sicher dass du dich abmelden möchtest?'}
            message={'Bist du sicher dass du den Artikel löschen möchtest?'}
            buttons={[
                {
                    text: 'Abbrechen',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        props.setShowDeleteAlert(false);
                    }
                },
                {
                    text: 'Löschen',
                    handler: () => props.deletePost()
                }
            ]}
        />
    )
};

export default AlertDeletePost;
