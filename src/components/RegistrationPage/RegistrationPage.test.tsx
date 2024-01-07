import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import React from 'react';
import RegistrationPage from '@/components/RegistrationPage/RegistrationPage.tsx';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import { vi } from 'vitest';
import toast, { Toaster } from 'react-hot-toast';
import { getAuth } from 'firebase/auth';
vi.mock('firebase/auth');
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addEventListener: function () {},
      removeEventListener: function () {},
    };
  };
describe('registration page', () => {
  test('registration page render', async () => {
    render(
      <BrowserRouter>
        <RegistrationPage />
      </BrowserRouter>,
    );
    expect(await screen.findByText('Create Account')).toBeInTheDocument();
    expect(await screen.findByText('you have an account?')).toBeInTheDocument();
  });
  test('render inputs', async () => {
    render(
      <BrowserRouter>
        <RegistrationPage />
      </BrowserRouter>,
    );
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText('password');
    const inputConfirmPassword =
      screen.getByPlaceholderText('confirm password');
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputConfirmPassword).toBeInTheDocument();
  });
  test('change value for inputs', async () => {
    render(
      <BrowserRouter>
        <RegistrationPage />
      </BrowserRouter>,
    );
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText('password');
    const inputConfirmPassword =
      screen.getByPlaceholderText('confirm password');
    await userEvent.type(inputEmail, 'myLogin');
    await userEvent.type(inputPassword, 'myPassword');
    await userEvent.type(inputConfirmPassword, 'myPassword');
    expect(inputEmail).toHaveValue('myLogin');
    expect(inputPassword).toHaveValue('myPassword');
    expect(inputConfirmPassword).toHaveValue('myPassword');
  });
  test('button register disabled', async () => {
    render(
      <BrowserRouter>
        <RegistrationPage />
      </BrowserRouter>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });
  test('redirect on click link for login', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <RegistrationPage />
        </Provider>
      </BrowserRouter>,
    );
    const btn = await screen.findByText('Login');
    expect(btn).toBeInTheDocument();
    await userEvent.click(btn);
    expect(window.location.pathname).toBe('/auth');
  });
  test('error on register', async () => {
    const firebase = await import('firebase/auth');
    firebase.getAuth = vi.fn();
    firebase.createUserWithEmailAndPassword = vi
      .fn()
      .mockReturnValue(Promise.reject({ code: 'auth/email-already-in-use' }));

    const spyOnToastError = vi.spyOn(toast, 'error');
    render(
      <MemoryRouter>
        <Provider store={setupStore()}>
          <RegistrationPage />
          <Toaster />
        </Provider>
      </MemoryRouter>,
    );
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText('password');
    const inputConfirmPassword =
      screen.getByPlaceholderText('confirm password');
    await userEvent.type(inputEmail, 'myLogin@en');
    await userEvent.type(inputPassword, 'myPassword');
    await userEvent.type(inputConfirmPassword, 'myPassword');
    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    expect(firebase.createUserWithEmailAndPassword).toHaveBeenCalledWith(
      getAuth(),
      'myLogin@en',
      'myPassword',
    );
    expect(spyOnToastError).toBeCalled();
  });
  test('firebase create account call on click button register', async () => {
    const firebase = await import('firebase/auth');
    firebase.getAuth = vi.fn();
    firebase.createUserWithEmailAndPassword = vi
      .fn()
      .mockReturnValue(Promise.resolve());

    const spyOnToastForRegister = vi.spyOn(toast, 'success');
    render(
      <MemoryRouter>
        <Provider store={setupStore()}>
          <RegistrationPage />
          <Toaster />
        </Provider>
      </MemoryRouter>,
    );
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText('password');
    const inputConfirmPassword =
      screen.getByPlaceholderText('confirm password');
    await userEvent.type(inputEmail, 'myLogin@en');
    await userEvent.type(inputPassword, 'myPassword');
    await userEvent.type(inputConfirmPassword, 'myPassword');
    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    expect(firebase.createUserWithEmailAndPassword).toHaveBeenCalledWith(
      getAuth(),
      'myLogin@en',
      'myPassword',
    );
    expect(spyOnToastForRegister).toBeCalled();
  });
});
