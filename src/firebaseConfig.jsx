// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_Key,
  authDomain: 'codepen-clone-e0a20.firebaseapp.com',
  projectId: import.meta.env.Vite_API_ProjectId,
  storageBucket: import.meta.env.Vite_API_StorageBucket,
  messagingSenderId: import.meta.env.Vite_API_MessagingSenderId,
  appId: import.meta.env.Vite_API_AppId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);