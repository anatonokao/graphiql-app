import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql/utilities';

export const graphqlAPI = createApi({
  reducerPath: 'graphqlAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (build) => ({
    getSchema: build.query<IntrospectionQuery, string>({
      query: (url: string) => ({
        url: url,
        method: 'POST',
        body: {
          query: getIntrospectionQuery(),
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }),
      transformResponse: (res: { data: IntrospectionQuery }) => res.data,
    }),
    getData: build.query<object, GraphqlRequest>({
      query: ({ url, request, headers, vars, operationName }) => ({
        url: url,
        method: 'POST',
        body: operationName
          ? {
              query: request,
              variables: vars,
              operationName: operationName,
            }
          : {
              query: request,
              variables: vars,
            },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...headers,
        },
      }),
      transformResponse: (res: { data: object }) => res.data,
    }),
  }),
});

interface GraphqlRequest {
  url: string;
  request: string;
  vars: object;
  headers: object;
  operationName?: string;
}
