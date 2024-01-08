import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import InputUrlApi from '@/components/GraphQl/InputUrlApi/InputUrlApi.tsx';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import { userEvent } from '@testing-library/user-event';
import { LocalizationProvider } from '@/components/localization/LocalizationContext.tsx';

describe('Input for url to API', () => {
  test('Input render', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <LocalizationProvider>
            <InputUrlApi />
          </LocalizationProvider>
        </Provider>
      </BrowserRouter>,
    );

    expect(
      await screen.findByText('Attention: only APIs that support GraphQL'),
    ).toBeInTheDocument();
  });

  test('Type in input', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <LocalizationProvider>
            <InputUrlApi />
          </LocalizationProvider>
        </Provider>
      </BrowserRouter>,
    );

    const editBtn = screen.getByText('Edit');
    await userEvent.click(editBtn);

    const input = screen.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, 'TestTest');

    expect(input).toHaveValue('TestTest');
  });
});
