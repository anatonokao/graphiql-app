import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import RootLayout from '@/components/GraphQl/layouts/RootLayout.tsx';
import DesktopLayout from '@/components/GraphQl/layouts/DesktopLayout/DesktopLayout.tsx';
import { mocks } from '../../../../tests/mocks.ts';
import { IntrospectionQuery } from 'graphql/utilities';
import { userEvent } from '@testing-library/user-event';
import MobileLayout from '@/components/GraphQl/layouts/MobileLayout/MobileLayout.tsx';
import { LocalizationProvider } from '@/components/localization/LocalizationContext.tsx';
describe('Root Layout', () => {
  vi.mock('cm6-graphql', () => ({
    graphql: vi.fn(),
  }));

  document.createRange = () => {
    const range = new Range();
    range.getBoundingClientRect = vi.fn();
    range.getClientRects = () => {
      return {
        item: () => null,
        length: 0,
        [Symbol.iterator]: vi.fn(),
      };
    };
    return range;
  };

  test('Check changing to Mobile Layout when width < 765', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <LocalizationProvider>
            <RootLayout />
          </LocalizationProvider>
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
          <LocalizationProvider>
            <RootLayout />
          </LocalizationProvider>
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

  test('Check toggling docs in Desktop Layout', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <LocalizationProvider>
            <DesktopLayout
              data={mocks.graphQLSchema as unknown as IntrospectionQuery}
              isFetching={false}
              isError={false}
            />
          </LocalizationProvider>
        </Provider>
      </BrowserRouter>,
    );

    Object.defineProperty(global, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800,
    });
    fireEvent(window, new Event('resize'));

    const docToggler = await screen.findByTestId('DesktopLayout-DocToggler');
    await userEvent.click(docToggler);

    const doc = await screen.findByText(
      'A query is sent through an HTTP POST call to retrieve data',
    );

    expect(doc).toBeInTheDocument();

    await userEvent.click(docToggler);

    expect(doc).not.toBeInTheDocument();
  });

  test('Check toggling docs in Mobile Layout', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <LocalizationProvider>
            <MobileLayout
              data={mocks.graphQLSchema as unknown as IntrospectionQuery}
              isFetching={false}
              isError={false}
            />
          </LocalizationProvider>
        </Provider>
      </BrowserRouter>,
    );

    Object.defineProperty(global, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 700,
    });
    fireEvent(window, new Event('resize'));

    const docToggler = await screen.findByTestId('MobileLayout-DocToggler');
    await userEvent.click(docToggler);

    const doc = await screen.findByText(
      'A query is sent through an HTTP POST call to retrieve data',
    );

    expect(doc).toBeInTheDocument();

    await userEvent.click(docToggler);

    expect(doc).not.toBeInTheDocument();
  });

  test('Check showing error in Desktop Layout', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <LocalizationProvider>
            <DesktopLayout
              data={mocks.graphQLSchema as unknown as IntrospectionQuery}
              isFetching={false}
              isError={true}
            />
          </LocalizationProvider>
        </Provider>
      </BrowserRouter>,
    );

    Object.defineProperty(global, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800,
    });
    fireEvent(window, new Event('resize'));

    const errorElement = await screen.findByText(
      'Oops, seems something went wrong!',
    );

    expect(errorElement).toBeInTheDocument();
  });

  test('Check showing error in Mobile Layout', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <LocalizationProvider>
            <MobileLayout
              data={mocks.graphQLSchema as unknown as IntrospectionQuery}
              isFetching={false}
              isError={true}
            />
          </LocalizationProvider>
        </Provider>
      </BrowserRouter>,
    );

    Object.defineProperty(global, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 700,
    });
    fireEvent(window, new Event('resize'));

    const errorElement = await screen.findByText(
      'Oops, seems something went wrong!',
    );

    expect(errorElement).toBeInTheDocument();
  });
});
