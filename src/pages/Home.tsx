import { IonContent, IonPage } from "@ionic/react";

const Home: React.FC = () => {
  return (
    // INFO: pt-safe (from tailwindcss-safe-area) plugin adds padding to the top of the page to avoid the status bar
    <IonPage className="pt-safe">
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
