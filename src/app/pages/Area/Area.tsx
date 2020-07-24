import React, {useEffect, useState} from "react";
import {
    IonCard,
    IonContent,
    IonItem,
    IonList,
    IonPage,
} from "@ionic/react";
import {useRouteMatch} from "react-router";
import './Area.scss';

import {AreaItem, Group} from "../../models/area";
import {syntax} from "../../../data/areas/syntax";
import {applied_computer_science} from "../../../data/areas/applied-computer-science";
import {technical_computer_science} from "../../../data/areas/technical-computer-science";
import {practical_computer_science} from "../../../data/areas/practical-computer-science";
import {theoretical_computer_science} from "../../../data/areas/theoretical-computer-science";
import Interweave from "interweave";

export const Area = ({ ...props }) => {

    const [area, setArea] = useState(null as any);
    const { path } = useRouteMatch();

    useEffect(() => {
        if (path === "/syntax") {
            setArea(syntax);
        } else if (path === "/angewandte-informatik") {
            setArea(applied_computer_science);
        } else if (path === "/technische-informatik") {
            setArea(technical_computer_science);
        } else if (path === "/praktische-informatik") {
            setArea(practical_computer_science);
        } else if (path === "/theoretische-informatik") {
            setArea(theoretical_computer_science);
        }
    }, [path]);

    return (
        <IonPage id="main">
            <IonContent>
                <div className="area__container">
                    {/*{loadContext.isLoading && !area && <LoadingSpinner/>}*/}
                    {/*{area &&*/}
                    {/*    <TopicCard url={path}/>*/}
                    {/*}*/}
                    <IonCard>
                        <IonList className="area__list">
                            <div className="header__wrapper">
                                <h1>Definition</h1>
                            </div>
                            {area && <h3><Interweave content={area.description}/></h3>}
                            {area && area.groups.map((group: Group, index: number) =>
                                <div className="area__group" key={index}>
                                    <h2>{group.title}</h2>
                                    <ul>
                                        {group.items.map((item: AreaItem, index: number) =>
                                            <IonItem
                                                key={index}
                                                routerLink={path + item.url}
                                                routerDirection="forward"
                                                lines="none"
                                                detail={true}
                                            >
                                                <div className="element__wrapper">
                                                    <div className="title">{item.title}</div>
                                                    <div className="description">{item.description}</div>
                                                </div>
                                            </IonItem>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </IonList>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    )
};
