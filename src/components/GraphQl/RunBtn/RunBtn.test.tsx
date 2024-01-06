import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import RunBtn from '@/components/GraphQl/RunBtn/RunBtn.tsx';
import { userEvent } from '@testing-library/user-event';
import { graphqlAPI } from '@/store/GraphQl/graphqlAPI/graphqlAPI.ts';

describe('Runner', () => {
  vi.mock('react-redux', async () => ({
    ...(await vi.importActual('react-redux')),
    useSelector: () => ({
      apiUrl: 'https://rickandmortyapi.com/graphql',
      request:
        'query testop1 {characters{results{name}}} query testop2 {characters{results{name}}}',
      headers: {},
      vars: {},
    }),
  }));

  test('Multiple runners render', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <RunBtn />
        </Provider>
      </BrowserRouter>,
    );

    const runBtn = screen.getByText('Run');

    await userEvent.click(runBtn);

    expect(screen.getByText('testop1')).toBeInTheDocument();
    expect(screen.getByText('testop2')).toBeInTheDocument();
  });

  test('After click fetching data is start', async () => {
    const spy = vi.spyOn(graphqlAPI, 'useLazyGetDataQuery');

    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <RunBtn />
        </Provider>
      </BrowserRouter>,
    );

    const runBtn = screen.getByText('Run');
    await userEvent.click(runBtn);

    const runBtnTestop1 = screen.getByText('testop1');
    await userEvent.click(runBtnTestop1);

    expect(spy).toBeCalled();
  });
});
