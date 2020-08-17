import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDamIXISkL4TPV6lFL8e2oIijk7IH8klJQ",
    authDomain: "reactjs-3e5c2.firebaseapp.com",
    databaseURL: "https://reactjs-3e5c2.firebaseio.com",
    projectId: "reactjs-3e5c2",
    storageBucket: "reactjs-3e5c2.appspot.com",
    messagingSenderId: "771592545027",
    appId: "1:771592545027:web:8f61be344e0c93234b3f36",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase