import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDEDQ21WmC1UmXwy1dCeeWlv33VJjFIMlU",
  authDomain: "blogs-35fa7.firebaseapp.com",
  projectId: "blogs-35fa7",
  storageBucket: "blogs-35fa7.appspot.com",
  messagingSenderId: "803160533926",
  appId: "1:803160533926:web:70232dc8dc55fb676c3d67"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db};