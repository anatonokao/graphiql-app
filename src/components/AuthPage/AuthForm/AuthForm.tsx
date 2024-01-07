import React, { useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import classes from './AuthForm.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import FormField from '@/components/common/FormField.tsx';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase.tsx';
import { useAppSelector } from '@/store/hooks.ts';
import { goToast } from '@/components/toast-helper.ts';
import { useLocalization } from '@/components/localization/LocalizationContext';

export type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

const AuthForm = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.authSlice);
  const { texts } = useLocalization();
  useEffect(() => {
    if (isAuth) {
      navigate('/playground');
    }
  }, [isAuth]); // eslint-disable-line react-hooks/exhaustive-deps

  const schemaAuth = yup.object().shape({
    email: yup.string().email(`${texts.authPage.errorEmailInput}`).required('email is a required field'),
    password: yup
      .string()
      .required('password is a required field')
      .matches(/[A-Z]/, `${texts.authPage.errorUppercase}`)
      .matches(/[a-z]/, `${texts.authPage.errorLowercase}`)
      .matches(/[1-9]/, `${texts.authPage.errorDigit}`)
      .matches(
        /[!@#$%^&*()\-_=+{};:,<.>]/,
        `${texts.authPage.errorSpecial}`,
      )
      .min(8),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schemaAuth),
  });
  const onSubmitHandler = ({ email, password }: FormData) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        goToast(`${texts.authPage.authSuccess}`, 'success');
        navigate('/playground');
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/invalid-email':
            goToast(`${texts.authPage.errorEmail}`, 'error');
            break;
          case 'auth/user-disabled':
            goToast(
              `${texts.authPage.errorUserDisabled}`,
              'error',
            );
            break;
          case 'auth/user-not-found':
            goToast(`${texts.authPage.erroruserNotFound}`, 'error');
            break;
          case 'auth/wrong-password':
            goToast(
              `${texts.authPage.errorWrongPassword}`,
              'error',
            );
            break;
          default:
            goToast(`${texts.authPage.errorInvalid}`, 'error');
            break;
        }
      });
    reset();
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>{texts.authPage.loginTitle}</h2>
      <div className={classes.inputs}>
        <FormField
          type={'email'}
          placeholder={texts.authPage.email}
          register={{ ...register('email') }}
          errors={errors.email}
        />
        <FormField
          type={'password'}
          placeholder={texts.authPage.password}
          register={{ ...register('password') }}
          errors={errors.password}
        />
      </div>
      <button disabled={!isValid} className={classes.button} type="submit">
      {texts.authPage.loginBtn}
      </button>
      <p className={classes.text}>
      {texts.authPage.loginText}
        <NavLink className={classes.link} to="/register">
        {texts.authPage.registerLink}
        </NavLink>
      </p>
    </form>
  );
};

export default AuthForm;
