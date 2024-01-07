import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import RootLayout from '@/components/GraphQl/layouts/RootLayout.tsx';
describe('Root Layout', () => {
  vi.mock('cm6-graphql', () => ({
    graphql: vi.fn(),
  }));

  test('Check changing to Mobile Layout when width < 765', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <RootLayout />
        </Provider>
      </BrowserRouter>,
    );

    Object.defineProperty(global, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 700,
    });

    fireEvent(window, new Event('resize'));

    expect(await screen.findByTestId('MobileLayout')).toBeInTheDocument();
  });

  test('Check changing to Desktop Layout when width > 765', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <RootLayout />
        </Provider>
      </BrowserRouter>,
    );

    Object.defineProperty(global, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 700,
    });
    fireEvent(window, new Event('resize'));

    Object.defineProperty(global, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800,
    });
    fireEvent(window, new Event('resize'));

    expect(await screen.findByTestId('DesktopLayout')).toBeInTheDocument();
  });
});
