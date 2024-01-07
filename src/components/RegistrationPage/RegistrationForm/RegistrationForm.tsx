import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classes from '@/components/AuthPage/AuthForm/AuthForm.module.scss';
import FormField from '@/components/common/FormField.tsx';
import { NavLink, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { ref } from 'yup';
import { FormData } from '@/components/AuthPage/AuthForm/AuthForm.tsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase.tsx';
import { Toaster } from 'react-hot-toast';
import { useAppSelector } from '@/store/hooks.ts';
import { goToast } from '@/components/toast-helper.ts';
import { useLocalization } from '@/components/localization/LocalizationContext';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.authSlice);
  const { texts } = useLocalization();

  const schemaRegistration = yup.object().shape({
    email: yup.string().email(`${texts.authPage.errorEmailInput}`).required('email is a required field'),
    password: yup
      .string()
      .required('password is a required field')
      .matches(/[A-Z]/,  `${texts.authPage.errorUppercase}`)
      .matches(/[a-z]/, `${texts.authPage.errorLowercase}`)
      .matches(/[1-9]/, `${texts.authPage.errorDigit}`)
      .matches(
        /[!@#$%^&*()\-_=+{};:,<.>]/,
        `${texts.authPage.errorSpecial}`,
      )
      .min(8),
    confirmPassword: yup
      .string()
      .oneOf([ref('password')], `${texts.registerPage.errorConfirmPassword}`)
      .required('confirm password is a required field'),
  });

  useEffect(() => {
    if (isAuth) {
      navigate('/playground');
    }
  }, [isAuth]); // eslint-disable-line react-hooks/exhaustive-deps
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schemaRegistration),
  });
  const onSubmitHandler = ({ email, password }: FormData) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        goToast(`${texts.registerPage.registerSuccess}`, 'success');
        navigate('/playground');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case 'auth/weak-password':
            goToast(`${texts.registerPage.errorWeakPassword}`, 'error');
            break;
          case 'auth/email-already-in-use':
            goToast(
              `${texts.registerPage.errorEmailAlreadyInUse}`,
              'error',
            );
            break;
          case 'auth/invalid-email':
            goToast(`${texts.authPage.errorEmail}`, 'error');
            break;
          case 'auth/operation-not-allowed':
            goToast(`${texts.registerPage.errorOperationNotAllowed}`, 'error');
            break;
          default:
            goToast(`${errorMessage}`, 'error');
            break;
        }
      });
    reset();
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>{texts.registerPage.registerTitle}</h2>
      <div className={classes.inputs}>
        <FormField
          type={'email'}
          placeholder={texts.registerPage.email}
          register={{ ...register('email') }}
          errors={errors.email}
        />
        <FormField
          type={'password'}
          placeholder={texts.registerPage.password}
          register={{ ...register('password') }}
          errors={errors.password}
        />
        <FormField
          type={'password'}
          placeholder={texts.registerPage.confirmPassword}
          register={{ ...register('confirmPassword') }}
          errors={errors.confirmPassword}
        />
      </div>
      <button disabled={!isValid} className={classes.button} type="submit">
      {texts.registerPage.registerBtn}
      </button>
      <p className={classes.text}>
      {texts.registerPage.registerText}
        <NavLink className={classes.link} to="/auth">
        {texts.registerPage.loginLink}
        </NavLink>
      </p>
      <Toaster />
    </form>
  );
};

export default RegistrationForm;
