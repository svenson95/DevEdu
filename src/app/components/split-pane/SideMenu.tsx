import React, {useContext} from 'react';
import {
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonTitle,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';

import { bookOutline } from 'ionicons/icons';

import './SideMenu.scss';
import { exams, internal, subjects } from "../../../data/menuTitles";
import {AuthContext} from "../../../App";

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
        <div className="buttons__wrapper">
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonMenuToggle autoHide={false}>
            <IonItem
                className={location.pathname === "/home" ? 'selected' : ''}
                routerLink={authContext.authed?.isAuthenticated ? "/dashboard" : "/home"}
                lines="none"
                detail={false}
            >
              <IonIcon slot="start" icon={bookOutline} />
              <IonTitle id="menu-title">DevEdu</IonTitle>
            </IonItem>
          </IonMenuToggle>
        </div>
      </div>
      <IonContent>
        <IonList class="subjects-list">
          <IonListHeader id="section-header">Schulfächer</IonListHeader>
          {subjects.map((page, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <div className="button__background"/>
                <RouterLink page={page} />
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList>
          <IonListHeader id="section-header">Internes</IonListHeader>
          {(authContext.authed?.isAuthenticated ? internal : privateInternal).map((page, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              {page.title === "Schuljahresplan" ?
                  <HyperLink page={page} url={"http://osz-teltow.de/organisatorisches/ablaufplaene/19_20/se-fi_19-20.pdf"} />
                  :
                  page.title === "Vertretungsplan" ?
                      <HyperLink page={page} url={"http://osz-teltow.de/organisatorisches/vertretungsplaene1/"} />
                      :
                      <RouterLink page={page} />
              }
            </IonMenuToggle>
          ))}
        </IonList>

        {authContext.authed?.isAuthenticated &&
          <IonList>
            <IonListHeader id="section-header">Klausuren</IonListHeader>
            {exams.map((page, index) => (
                <IonMenuToggle key={index} autoHide={false}>
                  <RouterLink page={page} />
                </IonMenuToggle>
            ))}
          </IonList>
        }
      </IonContent>
    </IonMenu>
  );
};

const RouterLink = ({ ...props }) => {
  const location = useLocation();
  return (
      <IonItem
          className={location.pathname.includes(props.page.url) ? 'selected' : ''}
          routerLink={props.page.url}
          lines="none"
          detail={false}
      >
        <IonIcon slot="start" icon={props.page.iosIcon} />
        <IonLabel>{props.page.title}</IonLabel>
      </IonItem>
  );
};

const HyperLink = ({ ...props }) => {
  const location = useLocation();
  return (
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <IonItem
            className={location.pathname.includes(props.page.url) ? 'selected ion-activatable' : ' ion-activatable'}
            lines="none"
            detail={false}
        >
          <IonIcon slot="start" icon={props.page.iosIcon} />
          <IonLabel>{props.page.title}</IonLabel>
        </IonItem>
      </a>
  );
};

export default SideMenu;
