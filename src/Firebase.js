import firebase from 'firebase/app'
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDKR3BqvP4JM55R5JhZFlfYqm5GlRNFZQM",
    authDomain: "comments-logusit.firebaseapp.com",
    databaseURL: "https://comments-logusit.firebaseio.com",
    projectId: "comments-logusit",
    storageBucket: "comments-logusit.appspot.com",
    messagingSenderId: "304179950648"
};
firebase.initializeApp(config);

export const database = firebase.database();