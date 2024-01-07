import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import DocPanel from '@/components/GraphQl/DocPanel/DocPanel.tsx';
import { mocks } from '../../../../tests/mocks.ts';
import { IntrospectionQuery } from 'graphql/utilities';

describe('Doc Panel', () => {
  const schema = mocks.graphQLSchema;

  test('Doc Panel Render', () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <DocPanel schema={schema as unknown as IntrospectionQuery} />
        </Provider>
      </BrowserRouter>,
    );

    expect(
      screen.getByText(
        'A query is sent through an HTTP POST call to retrieve data',
      ),
    ).toBeInTheDocument();
  });
  test('Doc Panel Open Type', () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <DocPanel schema={schema as unknown as IntrospectionQuery} />
        </Provider>
      </BrowserRouter>,
    );

    const queryBtn = screen.getByRole('button');

    fireEvent.click(queryBtn);

    expect(
      screen.getByText('Get a specific character by ID'),
    ).toBeInTheDocument();
  });

  test('Doc Panel Back Navigation', () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <DocPanel schema={schema as unknown as IntrospectionQuery} />
        </Provider>
      </BrowserRouter>,
    );

    const queryBtn = screen.getByRole('button');

    fireEvent.click(queryBtn);

    const backBtn = screen.getByText('Back');

    fireEvent.click(backBtn);

    expect(
      screen.getByText(
        'A query is sent through an HTTP POST call to retrieve data',
      ),
    ).toBeInTheDocument();
  });
});
