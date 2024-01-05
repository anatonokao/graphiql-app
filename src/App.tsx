import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import { NavLink } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase.tsx';
import { useAppDispatch } from '@/store/hooks.ts';
import { setDataUser } from '@/store/Auth/authSlice.ts';

function App() {
  const dispatch = useAppDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      user.getIdToken().then((res) => {
        dispatch(
          setDataUser({
            email: user.email || '',
            token: res,
            isAuth: true,
          }),
        );
      });
    } else {
      dispatch(setDataUser({ email: '', token: '', isAuth: false }));
    }
  });
  const DEADLINE = new Date('2024-01-08T01:59:00');
  const [finishTime] = useState(DEADLINE.getTime());
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const diff = (finishTime - Date.now()) / 1000;
    if (diff < 0) return;
    setDiff([
      Math.floor(diff / 86400),
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ]);
  }, [tick, finishTime]);

  useEffect(() => {
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick]);

  function getNoun(number: number, txt: string[], cases = [2, 0, 1, 1, 1, 2]) {
    return txt[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  return (
    <>
      <div className="nav" style={{ position: 'relative' }}>
        <img src={reactLogo} alt="logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/auth">Auth</NavLink>
        <NavLink to="/playground">GraphiQL</NavLink>
      </div>
      <div className="content">
        <h1 className="title">ДО ДЕДЛАЙНА</h1>
        <div className="timeContainer">
          <div>
            {`
            ${diffDays.toString().padStart(2, '0')} ${getNoun(diffDays, [
              'день',
              'дня',
              'дней',
            ])}
          `}
          </div>
          <div>
            {`
            ${diffH.toString().padStart(2, '0')} ${getNoun(diffH, [
              'час',
              'часа',
              'часов',
            ])}
          `}
          </div>
          <div>
            {`
            ${diffM.toString().padStart(2, '0')} ${getNoun(diffM, [
              'минута',
              'минуты',
              'минут',
            ])}
          `}
          </div>
          <div>
            {`
            ${diffS.toString().padStart(2, '0')} ${getNoun(diffS, [
              'секунда',
              'секунды',
              'секунд',
            ])}
          `}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
