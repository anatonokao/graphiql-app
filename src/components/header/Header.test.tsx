import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { LocalizationProvider } from '../localization/LocalizationContext';

describe('header', () => {
  test('header render', async () => {
    render(
      <BrowserRouter>
        <LocalizationProvider>
          <Header />
        </LocalizationProvider>
      </BrowserRouter>,
    );

    expect(await screen.findByText('Home')).toBeInTheDocument();
  });
});
