import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '../localization/LocalizationContext';
import WelcomePage from './WelcomePage';

describe('welcome-page', () => {
  test('welcomePage render', async () => {
    render(
      <BrowserRouter>
        <LocalizationProvider>
          <WelcomePage />
        </LocalizationProvider>
      </BrowserRouter>,
    );

    expect(await screen.findByText('About Course')).toBeInTheDocument();
  });
});
