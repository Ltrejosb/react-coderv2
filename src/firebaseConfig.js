import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp2c5CI2m4dUaf3upPA9ukL-DDn7HH-KY",
  authDomain: "fixbike-data.firebaseapp.com",
  projectId: "fixbike-data",
  storageBucket: "fixbike-data.appspot.com",
  messagingSenderId: "788427440765",
  appId: "1:788427440765:web:73873e8d7e62ba89ff2714",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
