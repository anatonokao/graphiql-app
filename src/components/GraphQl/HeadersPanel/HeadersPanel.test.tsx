import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import HeadersPanel from '@/components/GraphQl/HeadersPanel/HeadersPanel.tsx';

describe('Headers Panel', () => {
  test('Headers Panel Render', () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <HeadersPanel />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('JSON Format')).toBeInTheDocument();
  });
});
