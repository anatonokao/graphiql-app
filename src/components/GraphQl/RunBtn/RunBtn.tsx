import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { graphqlAPI } from '@/store/GraphQl/graphqlAPI/graphqlAPI.ts';
import { setError, setResponse } from '@/store/GraphQl/graphqlSlice.ts';

const RunBtn = () => {
  const dispatch = useAppDispatch();

  const { apiUrl, request, headers, vars } = useAppSelector(
    (state) => state.graphqlSlice,
  );

  const [getData, { data, isFetching, error }] =
    graphqlAPI.useLazyGetDataQuery();

  useEffect(() => {
    dispatch(setResponse(data || ''));
    dispatch(setError(error || null));
  }, [data, error, dispatch]);

  const btnHandler = () => {
    const headersObj = headers ? JSON.parse(headers) : {};
    const varsObj = vars ? JSON.parse(vars) : {};

    getData({ url: apiUrl, request, headers: headersObj, vars: varsObj });
  };

  return (
    <div>
      <button type="button" onClick={btnHandler} disabled={isFetching}>
        Run
      </button>
    </div>
  );
};

export default RunBtn;
