import React from 'react';
import './App.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import { auth } from '@/firebase.tsx';
import { useAppDispatch } from '@/store/hooks.ts';
import { setDataUser } from '@/store/Auth/authSlice.ts';
import { User } from 'firebase/auth';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const checkAuthUser = async (user: User | null): Promise<void> => {
    const currentUser = user;
    if (!currentUser) {
      dispatch(
        setDataUser({
          email: '',
          isAuth: false,
        }),
      );
    } else {
      dispatch(
        setDataUser({
          email: currentUser.email || '',
          isAuth: true,
        }),
      );
    }
  };

  const dispatch = useAppDispatch();
  useAuthState(auth, {
    onUserChanged: checkAuthUser,
  });

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
