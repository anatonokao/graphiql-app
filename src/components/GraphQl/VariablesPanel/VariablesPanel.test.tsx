import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import VariablesPanel from '@/components/GraphQl/VariablesPanel/VariablesPanel.tsx';

describe('Headers Panel', () => {
  test('Headers Panel Render', () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <VariablesPanel />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('JSON Format')).toBeInTheDocument();
  });
});
