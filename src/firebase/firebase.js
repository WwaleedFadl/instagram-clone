import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//

const firebaseConfig = {
  apiKey: "AIzaSyABFBJDfg5vCTQ7N2p1P5m7zSjqkaY8xc4",
  authDomain: "my-insta-clone-571ed.firebaseapp.com",
  projectId: "my-insta-clone-571ed",
  storageBucket: "my-insta-clone-571ed.appspot.com",
  messagingSenderId: "1066699913578",
  appId: "1:1066699913578:web:ef22af660862a228b5cd13",
};

//

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
