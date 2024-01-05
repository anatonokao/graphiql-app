import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import InputUrlApi from '@/components/GraphQl/InputUrlApi/InputUrlApi.tsx';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';

describe('app', () => {
  test('app render', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <InputUrlApi />
        </Provider>
      </BrowserRouter>,
    );

    expect(
      await screen.findByText('Attention: only APIs that support GraphQL'),
    ).toBeInTheDocument();
  });
});
