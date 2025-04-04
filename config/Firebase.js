import firebase from "firebase";



const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
   

//const analytics = getAnalytics(app);
export const database = firebase.database();
export const storage = firebase.storage();

