import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.tsx';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';

describe('app', () => {
  test('app render', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <App />
        </Provider>
      </BrowserRouter>,
    );

    expect(await screen.findByText('Home')).toBeInTheDocument();
  });
});
