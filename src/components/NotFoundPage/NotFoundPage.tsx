import React from 'react';
import { useNavigate } from 'react-router-dom';
import eyes from '@/assets/eyes.gif';
import classes from './NotFoundPage.module.scss';
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <img className={classes.eyes} src={eyes} alt={'sweet eyes'} />
      <p className={classes.notFound}>Page not found</p>
      <p className={classes.subTitle}>
        You have lost your way, but don&apos;t worry, come back soon
      </p>
      <button className={classes.btn} onClick={() => navigate('/')}>
        GO
      </button>
    </div>
  );
};

export default NotFoundPage;
