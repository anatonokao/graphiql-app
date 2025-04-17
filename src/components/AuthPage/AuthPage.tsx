import React from 'react';
import AuthForm from './AuthForm/AuthForm.tsx';
import classes from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <div className={classes.container}>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
