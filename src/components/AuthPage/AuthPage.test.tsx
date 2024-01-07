import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import AuthPage from '@/components/AuthPage/AuthPage.tsx';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import { getAuth } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
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

{
  describe('on click button login', () => {
    test('firebase login call on click button login', async () => {
      const firebase = await import('firebase/auth');
      firebase.getAuth = vi.fn();
      firebase.signInWithEmailAndPassword = vi
        .fn()
        .mockReturnValue(Promise.resolve());

      const spyOnToastForLogin = vi.spyOn(toast, 'success');
      render(
        <MemoryRouter>
          <Provider store={setupStore()}>
            <AuthPage />
            <Toaster />
          </Provider>
        </MemoryRouter>,
      );
      const inputEmail = screen.getByPlaceholderText(/email/i);
      const inputPassword = screen.getByPlaceholderText(/password/i);
      await userEvent.type(inputEmail, 'myLogin@en');
      await userEvent.type(inputPassword, 'myPassword');
      const btn = screen.getByRole('button');
      await userEvent.click(btn);
      expect(firebase.signInWithEmailAndPassword).toHaveBeenCalledWith(
        getAuth(),
        'myLogin@en',
        'myPassword',
      );
      expect(spyOnToastForLogin).toBeCalled();
    });
  });
  describe('auth page', () => {
    test('auth page render', async () => {
      render(
        <BrowserRouter>
          <AuthPage />
        </BrowserRouter>,
      );
      expect(await screen.findByText('Login to account')).toBeInTheDocument();
      expect(
        await screen.findByText("don't have an account yet?"),
      ).toBeInTheDocument();
    });
    test('render inputs', async () => {
      render(
        <BrowserRouter>
          <AuthPage />
        </BrowserRouter>,
      );
      const inputEmail = screen.getByPlaceholderText(/email/i);
      const inputPassword = screen.getByPlaceholderText(/password/i);
      expect(inputEmail).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
    });
    test('change value for inputs', async () => {
      render(
        <BrowserRouter>
          <AuthPage />
        </BrowserRouter>,
      );
      const inputEmail = screen.getByPlaceholderText(/email/i);
      const inputPassword = screen.getByPlaceholderText(/password/i);
      await userEvent.type(inputEmail, 'myLogin');
      await userEvent.type(inputPassword, 'myPassword');
      expect(inputEmail).toHaveValue('myLogin');
      expect(inputPassword).toHaveValue('myPassword');
    });
    test('button login disabled', async () => {
      render(
        <BrowserRouter>
          <AuthPage />
        </BrowserRouter>,
      );
      const btn = screen.getByRole('button');
      expect(btn).toBeDisabled();
    });
    test('redirect on click link for registration', async () => {
      render(
        <BrowserRouter>
          <Provider store={setupStore()}>
            <AuthPage />
          </Provider>
        </BrowserRouter>,
      );
      const btn = await screen.findByText('Register');
      expect(btn).toBeInTheDocument();
      await userEvent.click(btn);
      expect(window.location.pathname).toBe('/register');
    });
    test('error on login', async () => {
      const firebase = await import('firebase/auth');
      firebase.getAuth = vi.fn();
      firebase.signInWithEmailAndPassword = vi
        .fn()
        .mockReturnValue(Promise.reject({ code: 'auth/invalid-email' }));

      const spyOnToastError = vi.spyOn(toast, 'error');
      render(
        <MemoryRouter>
          <Provider store={setupStore()}>
            <AuthPage />
            <Toaster />
          </Provider>
        </MemoryRouter>,
      );
      const inputEmail = screen.getByPlaceholderText(/email/i);
      const inputPassword = screen.getByPlaceholderText(/password/i);
      await userEvent.type(inputEmail, 'myLogin@en');
      await userEvent.type(inputPassword, 'myPassword');
      const btn = screen.getByRole('button');
      await userEvent.click(btn);
      expect(firebase.signInWithEmailAndPassword).toHaveBeenCalledWith(
        getAuth(),
        'myLogin@en',
        'myPassword',
      );
      expect(spyOnToastError).toBeCalled();
    });
  });
}
