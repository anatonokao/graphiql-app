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
    dispatch(setResponse(JSON.stringify(data || '')));
    dispatch(setError(error || null));
  }, [data, error, dispatch]);

  const btnHandler = () => {
    getData({ url: apiUrl, request, headers, vars });
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
