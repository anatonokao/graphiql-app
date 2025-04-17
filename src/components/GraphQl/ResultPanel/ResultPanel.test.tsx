import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import ResultPanel from '@/components/GraphQl/ResultPanel/ResultPanel.tsx';

describe('Input for url to API', () => {
  vi.mock('react-redux', async () => ({
    ...(await vi.importActual('react-redux')),
    useSelector: () => ({ response: 'test' }),
  }));
  test('Input render', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <ResultPanel />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
