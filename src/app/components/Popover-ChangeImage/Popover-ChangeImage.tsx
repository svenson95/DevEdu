import React from "react";
import {IonButton, IonLabel, IonPopover} from "@ionic/react";
import './Popover-ChangeImage.scss';
import DataService from "../../services/data.service";
import {basePath} from "../../services/http.service";

export const PopoverChangeImage = ({ ...props }) => {

    function sendImage(event: any) {
        DataService.uploadImage(event.target[0].files[0]).then(async response => {
            const image = await response.json();
            console.log(image.id);
            editImageId(image.id);
        });
    }

    function editImageId(id: string) {
        const post = props.post;
        const oldImage = post.find((el: any) => el.type === "image" && el.content === props.showPopover);
        oldImage.content = basePath + "/images/" + id;
        props.setPost(post);
        props.setShowPopover(false);
        console.log(post);
    }

    return (
        <IonPopover
            isOpen={props.showPopover !== false}
            cssClass="changeImage-popover"
            onDidDismiss={() => props.setShowPopover(false)}
            mode="md"
        >
            <div className="changeImage-card">
                <IonLabel>
                    Wähle ein Bild aus, das Bild darf nicht größer als 255 KB sein und muss im Format PNG oder JPG sein.
                </IonLabel>
                <form className="mt-4" encType="multipart/form-data" onSubmit={event => {
                    event.preventDefault();
                    sendImage(event)
                }}>
                    <div className="image-picker form-group">
                        <input
                            type="file"
                            name="file"
                            id="input-files"
                            className="form-control-file border"
                        />
                    </div>
                    <IonButton fill="outline" type="submit">
                        Hochladen
                    </IonButton>
                </form>
            </div>
        </IonPopover>
    )
};
