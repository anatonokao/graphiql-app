import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.tsx';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('app', () => {
  test('app render', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(await screen.findByText('GraphiQL')).toBeInTheDocument();
  });
});
