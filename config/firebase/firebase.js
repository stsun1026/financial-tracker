import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "finance-tracker-56aca.firebaseapp.com",
  projectId: "finance-tracker-56aca",
  storageBucket: "finance-tracker-56aca.appspot.com",
  messagingSenderId: "1048804801627",
  appId: "1:1048804801627:web:65889ed7c27276786e137e",
  measurementId: "G-M7CS9ED1R5",
  databaseUrl: "https://finance-tracker-56aca-default-rtdb.firebaseio.com/",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

export default firebase;
