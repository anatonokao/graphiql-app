import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBVx_G7Eoc32axMPSwFmBVPvBVTm7bLOm4',
  authDomain: 'graphql-app-487fc.firebaseapp.com',
  projectId: 'graphql-app-487fc',
  storageBucket: 'graphql-app-487fc.appspot.com',
  messagingSenderId: '799220558537',
  appId: '1:799220558537:web:4d327d3c6f2d0d0cfc3b18',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const logOut = () => {
  signOut(auth);
};
