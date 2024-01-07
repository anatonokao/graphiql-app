import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import Prettifyer from '@/components/GraphQl/Prettifyer/Prettifyer.tsx';
import { userEvent } from '@testing-library/user-event';
describe('Prettifyer for Code Editor', () => {
  test('Prettifying', async () => {
    const mockFn = vi.hoisted(() => ({ dispatch: vi.fn() }));

    vi.mock('react-redux', async () => ({
      ...(await vi.importActual('react-redux')),
      useSelector: () => 'query {characters{results{name}}}',
      useDispatch: () => mockFn.dispatch,
    }));

    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <Prettifyer />
        </Provider>
      </BrowserRouter>,
    );

    await userEvent.click(screen.getByRole('button'));

    expect(mockFn.dispatch).toBeCalledWith({
      type: 'graphqlSlice/setRequest',
      payload:
        'query {\n  characters {\n    results {\n      name\n    }\n  }\n}\n',
    });
  });
});
