import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBJrjdKoWGwcVc1rTw7pgKgwF7Y9s5at-s",
    authDomain: "movie-project-78af1.firebaseapp.com",
    databaseURL: "https://movie-project-78af1-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "movie-project-78af1",
    storageBucket: "movie-project-78af1.appspot.com",
    messagingSenderId: "27796744946",
    appId: "1:27796744946:web:a8326d6c08d4e283a13e6b"
};

export const app = initializeApp(firebaseConfig);