import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/header/Header.tsx';
import { LocalizationProvider } from '../localization/LocalizationContext';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import { userEvent } from '@testing-library/user-event';

describe('header', () => {
  test('header render', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <LocalizationProvider>
            <Header />
          </LocalizationProvider>
        </Provider>
      </BrowserRouter>,
    );

    expect(await screen.findByText('Home')).toBeInTheDocument();
  });
  test('Lang Switcher', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <LocalizationProvider>
            <Header />
          </LocalizationProvider>
        </Provider>
      </BrowserRouter>,
    );

    const langSwitcher = await screen.findByText('EN');

    await userEvent.click(langSwitcher);

    const ruBtn = await screen.findByTestId('langSelector');

    await userEvent.selectOptions(ruBtn, ['ru']);

    expect(await screen.findByText('Главная')).toBeInTheDocument();
  });
  test('Burger test', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <LocalizationProvider>
            <Header />
          </LocalizationProvider>
        </Provider>
      </BrowserRouter>,
    );

    Object.defineProperty(global, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 450,
    });

    fireEvent(window, new Event('resize'));

    const burgerBtn = await screen.findByTestId('burgerMenuBtn');

    await userEvent.click(burgerBtn);

    expect(await screen.findByText('Home')).toBeInTheDocument();
  });
});
