import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import classes from './AuthForm.module.scss';
import { NavLink } from 'react-router-dom';
import FormField from '@/components/common/FormField.tsx';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase.tsx';
import toast, { Toaster } from 'react-hot-toast';

const schemaAuth = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
export type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export const goToast = (text: string, type: string) => {
  switch (type) {
    case 'success':
      toast.success(`${text}`, {
        className: classes.toast,
      });
      break;
    case 'error':
      toast.error(`${text}`, {
        className: classes.toastError,
      });
      break;
  }
};

const AuthForm = () => {
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
            goToast(`${errorMessage}`, 'error');
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
      <Toaster />
    </form>
  );
};

export default AuthForm;
