// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJpCkqA57yklPYasZ0Nf7CLYz4rgmmkAw",
  authDomain: "orgando-57ed7.firebaseapp.com",
  projectId: "orgando-57ed7",
  storageBucket: "orgando-57ed7.appspot.com",
  messagingSenderId: "1053385977267",
  appId: "1:1053385977267:web:7429ae5482cfaa36d8afc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);