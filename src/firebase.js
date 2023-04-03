import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCI-WBxGKrcSZ_sBcPOutaEv9Vi_ilPl-8",
  authDomain: "floil-refinery-ef8f7.firebaseapp.com",
  projectId: "floil-refinery-ef8f7",
  storageBucket: "floil-refinery-ef8f7.appspot.com",
  messagingSenderId: "567228478058",
  appId: "1:567228478058:web:ae07560c720c6c4a525013"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth();
export const storage = getStorage(app)