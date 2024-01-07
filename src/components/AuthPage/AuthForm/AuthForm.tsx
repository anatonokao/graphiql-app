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

const schemaAuth = yup.object().shape({
  email: yup.string().email().required('email is a required field'),
  password: yup
    .string()
    .required('password is a required field')
    .matches(/[A-Z]/, 'at least one uppercase required')
    .matches(/[a-z]/, 'at least one lowercase required')
    .matches(/[1-9]/, 'at least one digit required')
    .matches(
      /[!@#$%^&*()\-_=+{};:,<.>]/,
      'at least one special character required',
    )
    .min(8),
});
export type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

const AuthForm = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.authSlice);
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
    resolver: yupResolver(schemaAuth),
  });
  const onSubmitHandler = ({ email, password }: FormData) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        goToast('Welcome to the team', 'success');
        navigate('/playground');
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/invalid-email':
            goToast('This email address is invalid', 'error');
            break;
          case 'auth/user-disabled':
            goToast(
              'This email address is disabled by the administrator',
              'error',
            );
            break;
          case 'auth/user-not-found':
            goToast('This email address is not registered', 'error');
            break;
          case 'auth/wrong-password':
            goToast(
              'The password is invalid or the user does not have a password',
              'error',
            );
            break;
          default:
            goToast('Email address or password is invalid', 'error');
            break;
        }
      });
    reset();
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Login to account</h2>
      <div className={classes.inputs}>
        <FormField
          type={'email'}
          placeholder={'email'}
          register={{ ...register('email') }}
          errors={errors.email}
        />
        <FormField
          type={'password'}
          placeholder={'password'}
          register={{ ...register('password') }}
          errors={errors.password}
        />
      </div>
      <button disabled={!isValid} className={classes.button} type="submit">
        login
      </button>
      <p className={classes.text}>
        don&apos;t have an account yet?
        <NavLink className={classes.link} to="/register">
          Register
        </NavLink>
      </p>
    </form>
  );
};

export default AuthForm;
