import React from 'react';
import classes from '@/components/AuthPage/AuthPage.module.scss';
import RegistrationForm from '@/components/RegistrationPage/RegistrationForm/RegistrationForm.tsx';

const RegistrationPage = () => {
  return (
    <div className={classes.container}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
