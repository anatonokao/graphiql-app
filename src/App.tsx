import React from 'react';
import './App.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import { auth } from '@/firebase.tsx';
import { useAppDispatch } from '@/store/hooks.ts';
import { setDataUser } from '@/store/Auth/authSlice.ts';
import { User } from 'firebase/auth';

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
      <div className="nav" style={{ position: 'relative' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/auth">Auth</NavLink>
        <NavLink to="/playground">GraphiQL</NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default App;
