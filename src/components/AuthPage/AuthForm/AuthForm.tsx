import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import classes from './AuthForm.module.scss';
import { NavLink } from 'react-router-dom';
import FormField from '@/components/common/FormField.tsx';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/firebase.tsx';

const schemaAuth = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
export type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};
const AuthForm = () => {
  const auth = getAuth(app);
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
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
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
