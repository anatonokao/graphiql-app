import { describe, expect, test } from 'vitest';
import {
  graphqlSlice,
  setApiUrl,
  setError,
  setHeaders,
  setRequest,
  setResponse,
  setVars,
} from '@/store/GraphQl/graphqlSlice.ts';
import { mocks } from '../../../tests/mocks.ts';

describe('Graphql Slice', () => {
  test('Check setApiUrl', async () => {
    const newState = graphqlSlice.reducer(
      mocks.graphqlState,
      setApiUrl('https://testurl.test'),
    );
    expect(newState.apiUrl).toBe('https://testurl.test');
  });

  test('Check setRequest', async () => {
    const newState = graphqlSlice.reducer(
      mocks.graphqlState,
      setRequest('test request'),
    );
    expect(newState.request).toBe('test request');
  });

  test('Check setResponse', async () => {
    const newState = graphqlSlice.reducer(
      mocks.graphqlState,
      setResponse('{"data": {"names": ["test"]}}'),
    );
    expect(newState.response).toBe('{"data": {"names": ["test"]}}');
  });

  test('Check setError', async () => {
    const newState = graphqlSlice.reducer(
      mocks.graphqlState,
      setError({ status: 'CUSTOM_ERROR', error: 'test error' }),
    );
    expect(newState.error).toStrictEqual(['test error']);
  });

  test('Check setHeaders', async () => {
    const newState = graphqlSlice.reducer(
      mocks.graphqlState,
      setHeaders('{"Authorization":"test"}'),
    );
    expect(newState.headers).toBe('{"Authorization":"test"}');
  });

  test('Check setVars', async () => {
    const newState = graphqlSlice.reducer(
      mocks.graphqlState,
      setVars('{"name":"test"}'),
    );
    expect(newState.vars).toBe('{"name":"test"}');
  });
});
