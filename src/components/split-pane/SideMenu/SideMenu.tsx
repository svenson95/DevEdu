import React, { useEffect, useRef } from 'react';
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
import { menuController } from '@ionic/core';
import { useLocation } from 'react-router-dom';

import { bookOutline } from 'ionicons/icons';

import './SideMenu.scss';
import { exams, internal, subjects } from "../../../data/menuTitles";

export const pages = [
    ...subjects, ...internal, ...exams
];

const SideMenu: React.FC = () => {
  const location = useLocation();
  const menuRef = useRef<HTMLIonMenuElement>(null);

  useEffect(() => {
    menuController.close().catch(err => console.log(err));
  }, [location.pathname]);

  return (
    <IonMenu contentId="main" type="overlay" ref={menuRef}>
      <IonContent>
        <div className="title__container">
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonMenuToggle autoHide={false}>
            <IonItem
                className={location.pathname === "/start" ? 'selected' : ''}
                routerLink="/start"
                routerDirection="none"
                lines="none"
                detail={false}
            >
              <IonIcon slot="start" icon={bookOutline} />
              <IonTitle id="menu-title">DevEdu</IonTitle>
            </IonItem>
          </IonMenuToggle>
        </div>

        <IonList>
          <IonListHeader id="section-header">Schulfächer</IonListHeader>
          {subjects.map((page, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                    className={location.pathname === page.url ? 'selected' : ''}
                    routerLink={page.url}
                    routerDirection="none"
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
          {internal.map((page, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                  className={location.pathname === page.url ? 'selected' : ''}
                  routerLink={page.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
              >
                <IonIcon slot="start" icon={page.iosIcon} />
                <IonLabel>{page.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>

        <IonList>
          <IonListHeader id="section-header">Klausuren</IonListHeader>
          {exams.map((page, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                    className={location.pathname === page.url ? 'selected' : ''}
                    routerLink={page.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                >
                  <IonIcon slot="start" icon={page.iosIcon} />
                  <IonLabel>{page.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
