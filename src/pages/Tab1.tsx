import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About this app</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" /> */}
        <div>
          <p>This app was a practice from Full Stack App Development Advanced Diploma Program, created by Claudia Ton following the tutorial from </p>
        <a href="https://ionicframework.com/docs/react/your-first-app/">https://ionicframework.com/docs/react/your-first-app/</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
