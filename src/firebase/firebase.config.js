import {initializeApp} from "firebase/app";
import { firebaseCreds } from "../credentials/credentials";

const firebaseConfig = {
    apiKey: firebaseCreds.apiKey,
    authDomain: firebaseCreds.authDomain,
    projectId: firebaseCreds.projectId,
    storageBucket: firebaseCreds.storageBucket,
    messagingSenderId: firebaseCreds.messagingSenderId,
    appId: firebaseCreds.appId
  };

export const firebaseApp = initializeApp(firebaseConfig);