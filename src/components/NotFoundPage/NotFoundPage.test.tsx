import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import { LocalizationProvider } from '@/components/localization/LocalizationContext.tsx';
import App from '@/App.tsx';
import AuthPage from '@/components/AuthPage/AuthPage.tsx';
import RegistrationPage from '@/components/RegistrationPage/RegistrationPage.tsx';
import RootLayout from '@/components/GraphQl/layouts/RootLayout.tsx';
import StyleGuide from '@/components/StyleGuidePage/StyleGuide.tsx';
import NotFoundPage from '@/components/NotFoundPage/NotFoundPage.tsx';
import { userEvent } from '@testing-library/user-event';

describe('not found page', () => {
  test('not found page render', async () => {
    render(
      <MemoryRouter initialEntries={['/notfound']}>
        <LocalizationProvider>
          <Provider store={setupStore()}>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="/" element={<div>welcome</div>} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/playground" element={<RootLayout />} />
                <Route path="/styleguide" element={<StyleGuide />} />
                <Route path="*" element={<NotFoundPage />}></Route>
              </Route>
            </Routes>
          </Provider>
        </LocalizationProvider>
      </MemoryRouter>,
    );

    expect(await screen.findByText('Page not found')).toBeInTheDocument();
    expect(
      await screen.findByText(
        "You have lost your way, but don't worry, come back soon",
      ),
    ).toBeInTheDocument();
    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    expect(window.location.pathname).toBe('/');
  });
});
