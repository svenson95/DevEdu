import {
    IonCard,
    IonContent,
    IonPage,
    IonTitle,
} from '@ionic/react';
import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import './Page.scss';
import {pages} from "../components/split-pane/Menu";

const Page = ({ ...props }) => {

    const { name } = useParams<{ name: string; }>();
    const pageTitle = pages.find(el => {
        return el.url.substring(1) === name
    })?.title;

    useEffect(() => props.setPageTitle(pageTitle));

  return (
      <IonPage>
          <IonContent>
              <IonCard>
                  <IonTitle>Test</IonTitle>
              </IonCard>
          </IonContent>
      </IonPage>
  );
};

export default Page;
