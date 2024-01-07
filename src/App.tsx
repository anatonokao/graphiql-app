import React from 'react';
import './App.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import { auth } from '@/firebase.tsx';
import { useAppDispatch } from '@/store/hooks.ts';
import { setDataUser } from '@/store/Auth/authSlice.ts';
import { User } from 'firebase/auth';
import Header from '@/components/header/Header.tsx';
import Footer from '@/components/footer/Footer.tsx';
import Loader from '@/components/common/Loading/Loader/Loader.tsx';
import { goToast } from '@/components/toast-helper.ts';

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
  const [, loading, error] = useAuthState(auth, {
    onUserChanged: checkAuthUser,
  });

  error && goToast('Something went wrong! You need login again', 'error');

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
