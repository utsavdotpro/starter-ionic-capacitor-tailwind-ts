import { IonContent, IonPage } from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* TODO: Uncomment for page header, or clean */}
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <IonContent fullscreen>
        <div className="p-4 font-bold">Hello from Tailwind!</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
