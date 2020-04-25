import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  bookOutline,
  calendarOutline,
  calendarSharp,
  codeSlashOutline,
  codeSlashSharp,
  helpCircleOutline,
  helpCircleSharp,
  libraryOutline,
  librarySharp,
  mailOutline,
  mailSharp,
  megaphoneOutline,
  megaphoneSharp,
  peopleOutline,
  peopleSharp,
  schoolOutline,
  schoolSharp,
  todayOutline,
  todaySharp
} from 'ionicons/icons';
import './Menu.scss';

interface appPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const subjects: appPage[] = [
  {
    title: 'Lernfeld 1',
    url: '/lf-1',
    iosIcon: codeSlashOutline,
    mdIcon: codeSlashSharp
  },
  {
    title: 'Lernfeld 2',
    url: '/lf-2',
    iosIcon: codeSlashOutline,
    mdIcon: codeSlashSharp
  },
  {
    title: 'Lernfeld 3',
    url: '/lf-3',
    iosIcon: codeSlashOutline,
    mdIcon: codeSlashSharp
  },
  {
    title: 'Lernfeld 4',
    url: '/lf-4',
    iosIcon: codeSlashOutline,
    mdIcon: codeSlashSharp
  },
  {
    title: 'Lernfeld 5',
    url: '/lf-5',
    iosIcon: codeSlashOutline,
    mdIcon: codeSlashSharp
  },
  {
    title: 'Lernfeld 6',
    url: '/lf-6',
    iosIcon: codeSlashOutline,
    mdIcon: codeSlashSharp
  },
  {
    title: 'WiSo',
    url: '/wiso',
    iosIcon: codeSlashOutline,
    mdIcon: codeSlashSharp
  },
  {
    title: 'Englisch',
    url: '/englisch',
    iosIcon: codeSlashOutline,
    mdIcon: codeSlashSharp
  },
  {
    title: 'Deutsch',
    url: '/deutsch',
    iosIcon: codeSlashOutline,
    mdIcon: codeSlashSharp
  },
];

const internal: appPage[] = [
  {
    title: 'Lehrmaterial',
    url: '/lehrmaterial',
    iosIcon: libraryOutline,
    mdIcon: librarySharp
  },
  {
    title: 'Mitteilungen',
    url: '/mitteilungen',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Schuljahresablaufplan',
    url: '/schuljahresablaufplan',
    iosIcon: schoolOutline,
    mdIcon: schoolSharp
  },
  {
    title: 'Vertretungsplan',
    url: '/vertretungsplan',
    iosIcon: todayOutline,
    mdIcon: todaySharp
  },
  {
    title: 'Lehrer',
    url: '/lehrer',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Feedback',
    url: '/feedback',
    iosIcon: megaphoneOutline,
    mdIcon: megaphoneSharp
  },
];

const exams: appPage[] = [
  {
    title: 'Termine',
    url: '/termine',
    iosIcon: calendarOutline,
    mdIcon: calendarSharp
  },
  {
    title: 'LF1 - Test Quiz',
    url: '/lf1-testquiz',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp
  },
  {
    title: 'WiSo - Test Quiz',
    url: '/wiso-testquiz',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp
  }
];
export const pages = [
    ...subjects, ...internal, ...exams
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="title-list">
          <div className="title__container">
            <IonMenuToggle autoHide={false}>
              <IonItem
                  className={location.pathname === "/start" ? 'selected' : ''}
                  routerLink="/start"
                  routerDirection="back"
                  lines="none"
                  detail={false}
              >
                <IonIcon slot="start" icon={bookOutline} />
                <IonListHeader id="menu-title">DevEdu</IonListHeader>
              </IonItem>
            </IonMenuToggle>
          </div>
          <IonNote>Sven | FIA93</IonNote>
        </IonList>

        <IonList>
          <IonListHeader id="section-header">Schulfächer</IonListHeader>
          {subjects.map((page, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                    className={location.pathname === page.url ? 'selected' : ''}
                    routerLink={page.url}
                    routerDirection="forward"
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
                  routerDirection="forward"
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
          <IonListHeader id="section-header">Internes</IonListHeader>
          {exams.map((page, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                    className={location.pathname === page.url ? 'selected' : ''}
                    routerLink={page.url}
                    routerDirection="forward"
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

export default Menu;
