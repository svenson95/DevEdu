import {IonSpinner} from "@ionic/react";
import React from "react";

export const LoadingSpinner = () =>
    <div className="spinner__wrapper">
        <IonSpinner name="crescent"/>
    </div>;
