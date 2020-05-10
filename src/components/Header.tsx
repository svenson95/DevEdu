import {IonButton, IonButtons, IonHeader, IonIcon, IonItem, IonMenuButton, IonToolbar} from "@ionic/react";
import React, {useEffect, useState} from "react";
import { pages } from "./split-pane/SideMenu/SideMenu";
import {useHistory} from "react-router";
import {subjectPaths} from "./split-pane/Content/Content";
import {bookOutline} from "ionicons/icons";

const Header = () => {

    const [pageTitle, setPageTitle] = useState("-" as any);
    const history = useHistory();

    useEffect(() => {
        const path = history.location.pathname;
        const subject = subjectPaths.find(el => path.startsWith(el));
        const pageItem = pages.find((el: any) => el.url.toLowerCase() === path);

        console.log(history);

        if (path.startsWith("/start")) {
            setPageTitle("Start");
        } else if (subject) {
            setPageTitle(pages.find(el => el.url === subject)?.title);
        } else {
            setPageTitle(pageItem?.title || "-");
        }
    }, [history.location.pathname]);

    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton/>
                    <IonButton className="navigate__back__button" onClick={history.goBack}>
                        ❮
                    </IonButton>
                </IonButtons>
                <div className="title__wrapper">
                    <h1>{pageTitle}</h1>
                    <IonItem
                        className={"content__header__logo " + (history.location.pathname === "/start" ? 'selected' : '')}
                        routerLink="/start"
                        routerDirection="none"
                        lines="none"
                        detail={false}
                    >
                        <IonIcon slot="start" icon={bookOutline} />
                    </IonItem>
                </div>
            </IonToolbar>
        </IonHeader>
    )
};

export default Header;
