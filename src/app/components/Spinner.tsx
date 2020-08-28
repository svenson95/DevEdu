import {IonSpinner} from "@ionic/react";
import React from "react";

export const LoadingSpinner = ({ ...props }) =>
    <div className={props.appLoader ? "spinner__wrapper app-loader" : "spinner__wrapper"}>
        <IonSpinner name="crescent"/>
    </div>;
