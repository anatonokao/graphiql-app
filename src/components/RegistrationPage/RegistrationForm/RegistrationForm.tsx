import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classes from '@/components/AuthPage/AuthForm/AuthForm.module.scss';
import FormField from '@/components/common/FormField.tsx';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { ref } from 'yup';
import { FormData, goToast } from '@/components/AuthPage/AuthForm/AuthForm.tsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase.tsx';
import { Toaster } from 'react-hot-toast';

const schemaRegistration = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup
    .string()
    .oneOf([ref('password')], 'password fields must match')
    .required('confirm password is a required field'),
});

const RegistrationForm = () => {
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
