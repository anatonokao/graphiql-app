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

const schemaRegistration = yup.object().shape({
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
  confirmPassword: yup
    .string()
    .oneOf([ref('password')], 'password fields must match')
    .required('confirm password is a required field'),
});

const RegistrationForm = () => {
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
    resolver: yupResolver(schemaRegistration),
  });
  const onSubmitHandler = ({ email, password }: FormData) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        goToast('Account is created', 'success');
        navigate('/playground');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case 'auth/weak-password':
            goToast('The password is too weak', 'error');
            break;
          case 'auth/email-already-in-use':
            goToast(
              'This email address is already in use by another account',
              'error',
            );
            break;
          case 'auth/invalid-email':
            goToast('This email address is invalid', 'error');
            break;
          case 'auth/operation-not-allowed':
            goToast('Email/password accounts are not enabled', 'error');
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
      <h2>Create Account</h2>
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
        <FormField
          type={'password'}
          placeholder={'confirm password'}
          register={{ ...register('confirmPassword') }}
          errors={errors.confirmPassword}
        />
      </div>
      <button disabled={!isValid} className={classes.button} type="submit">
        register
      </button>
      <p className={classes.text}>
        you have an account?
        <NavLink className={classes.link} to="/auth">
          Login
        </NavLink>
      </p>
      <Toaster />
    </form>
  );
};

export default RegistrationForm;
