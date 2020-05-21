import React, {useContext} from 'react';
import {
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu, IonMenuButton,
  IonMenuToggle,
  IonTitle,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';

import { bookOutline } from 'ionicons/icons';

import './SideMenu.scss';
import { exams, internal, subjects } from "../../data/menuTitles";
import {AuthContext} from "../../App";

const privatePages = [
  "/lehrmaterial",
  "/mitteilungen",
  "/schuljahresplan",
  "/vertretungsplan",
  "/lehrer"
];

const privateInternal = internal.filter(el => !privatePages.includes(el.url));

const SideMenu: React.FC = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);

  return (
    <IonMenu contentId="main" type="overlay" swipeGesture={false}>
      <div className="title__container">
        <IonButtons slot="start">
          <IonMenuButton/>
        </IonButtons>
        <IonMenuToggle autoHide={false}>
          <IonItem
            className={location.pathname === "/start" ? 'selected' : ''}
            routerLink="/start"
            lines="none"
            detail={false}
          >
            <IonIcon slot="start" icon={bookOutline} />
            <IonTitle id="menu-title">DevEdu</IonTitle>
          </IonItem>
        </IonMenuToggle>
      </div>
      <IonContent>
        <IonList>
          <IonListHeader id="section-header">Schulfächer</IonListHeader>
          {subjects.map((page, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <div className="button__background"/>
                <IonItem
                  className={location.pathname.includes(page.url) ? 'selected' : ''}
                  routerLink={page.url}
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={page.iosIcon} />
                  <IonLabel>{page.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList>
          <IonListHeader id="section-header">Internes</IonListHeader>
          {(authContext.authed === "true" ? internal : privateInternal).map((page, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                  className={location.pathname.includes(page.url) ? 'selected' : ''}
                  routerLink={page.url}
                  lines="none"
                  detail={false}
              >
                <IonIcon slot="start" icon={page.iosIcon} />
                <IonLabel>{page.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>

        {authContext.authed === "true" &&
          <IonList>
            <IonListHeader id="section-header">Klausuren</IonListHeader>
            {exams.map((page, index) => (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                      className={location.pathname.includes(page.url) ? 'selected' : ''}
                      routerLink={page.url}
                      lines="none"
                      detail={false}
                  >
                    <IonIcon slot="start" icon={page.iosIcon} />
                    <IonLabel>{page.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
            ))}
          </IonList>
        }
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
