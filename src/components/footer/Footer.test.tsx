import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '../localization/LocalizationContext';
import Footer from './Footer';

describe('footer', () => {
  test('footer render', async () => {
    render(
      <BrowserRouter>
        <LocalizationProvider>
          <Footer />
        </LocalizationProvider>
      </BrowserRouter>,
    );

    expect(await screen.findByText('Alexander')).toBeInTheDocument();
  });
});
