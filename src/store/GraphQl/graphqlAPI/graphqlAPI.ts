import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql/utilities';

const URL = 'https://rickandmortyapi.com/graphql';

export const graphqlAPI = createApi({
  reducerPath: 'graphqlAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (build) => ({
    getSchema: build.query<IntrospectionQuery, void>({
      query: () => ({
        url: URL,
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
    getData: build.query<GraphqlResponse, GraphqlRequest>({
      query: ({ request, headers, vars }) => ({
        url: URL,
        method: 'POST',
        body: {
          request,
          vars,
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...headers,
        },
      }),
    }),
  }),
});

interface GraphqlResponse {
  data: object;
}

interface GraphqlRequest {
  request: string;
  vars: string;
  headers: object;
}
