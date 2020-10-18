import React, {useContext} from 'react';
import {
  IonButtons,
  IonCard,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonListHeader,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonTitle,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { bookOutline } from 'ionicons/icons';
import './SideMenu.scss';

import { subjects, areas, internal } from "../../../data/menuTitles";
import {AuthContext} from "../../context/auth.context";

const privatePages = [
  "/lehrmaterial",
  "/mitteilungen",
  "/vertretungsplan",
  "/schuljahresplan",
  "/lehrer",
  "/klausuren"
];

const privateInternal = internal.filter(el => !privatePages.includes(el.url));

const SideMenu: React.FC = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);

  const isStartPage = ["/login", "/dashboard"];

  return (
    <IonMenu contentId="main" type="overlay" swipeGesture={false}>
      <div className="tbk-sidenav-header">
        <div className="tbk-sidenav-header-buttons">
          <IonButtons slot="start">
            <IonMenuButton mode="md"/>
          </IonButtons>
          <IonMenuToggle className="tbk-logo-btn" autoHide={false}>
            <IonItem
                className={isStartPage.find(el => el === location.pathname) ? 'selected' : ''}
                routerLink={authContext.isAuthenticated ? "/dashboard" : "/login"}
                lines="none"
                detail={false}
            >
              <IonIcon icon={bookOutline}/>
              <IonTitle>tecbook</IonTitle>
            </IonItem>
          </IonMenuToggle>
        </div>
      </div>
      <IonContent>
        <IonCard className='tbk-section-card'>
          <IonListHeader class="tbk-section-header unselectable">Schulfächer</IonListHeader>
          {subjects.map((page, index) => {
            return (
              <IonMenuToggle class="tbk-nav-item" key={index} autoHide={false}>
                <RouterLink page={page} />
              </IonMenuToggle>
            );
          })}
        </IonCard>

        <IonCard className='tbk-section-card'>
          <IonListHeader class="tbk-section-header unselectable">Internes</IonListHeader>
          {(authContext.isAuthenticated ? internal : privateInternal).map((page, index) => (
            <IonMenuToggle class="tbk-nav-item" key={index} autoHide={false}>
              {page.title === "Schuljahresplan" ?
                  <HyperLink page={page} url={"http://osz-teltow.de/organisatorisches/ablaufplaene/20_21/se-fi_20-21.pdf"} />
                  :
                  <RouterLink page={page} />
              }
            </IonMenuToggle>
          ))}
        </IonCard>

        <IonCard className='tbk-section-card'>
          <IonListHeader class="tbk-section-header unselectable">Bereiche</IonListHeader>
          {areas.map((page, index) => {
            return (
                <IonMenuToggle class="tbk-nav-item" key={index} autoHide={false}>
                  <div className="button__background"/>
                  <RouterLink page={page} />
                </IonMenuToggle>
            );
          })}
        </IonCard>

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
        <IonLabel className="tbk-nav-item-label">{props.page.title}</IonLabel>
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
          <IonLabel className="tbk-nav-item-label">{props.page.title}</IonLabel>
        </IonItem>
      </a>
  );
};

export default SideMenu;
