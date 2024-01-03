import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { graphqlAPI } from '@/store/GraphQl/graphqlAPI/graphqlAPI.ts';
import { setError, setResponse } from '@/store/GraphQl/graphqlSlice.ts';
import { getOperationsNames } from '@/components/GraphQl/helpers.ts';

const RunBtn = () => {
  const [operationsNames, setOperationNames] = useState<string[]>([]);
  const isSingleOperation = operationsNames.length <= 1;
  console.log(isSingleOperation);
  const dispatch = useAppDispatch();

  const { apiUrl, request, headers, vars } = useAppSelector(
    (state) => state.graphqlSlice,
  );
  //
  const [getData, { data, isFetching, error }] =
    graphqlAPI.useLazyGetDataQuery();

  useEffect(() => {
    dispatch(setResponse(data || ''));
    dispatch(setError(error || null));
  }, [data, error, dispatch]);

  const btnHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    const names = getOperationsNames(request);
    setOperationNames(names);

    names.length > 1
      ? document.addEventListener('click', () => setOperationNames([]), {
          once: true,
        })
      : makeRequest();
  };

  const makeRequest = (operationName?: string) => {
    getData({
      url: apiUrl,
      request,
      headers: headers ? JSON.parse(headers) : {},
      vars: vars ? JSON.parse(vars) : {},
      operationName,
    });
  };

  return (
    <div>
      {isSingleOperation ? (
        <button type="button" onClick={btnHandler} disabled={isFetching}>
          Run
        </button>
      ) : (
        <div>
          {operationsNames.map((operation, index) => (
            <button key={index} onClick={() => makeRequest(operation)}>
              {operation}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RunBtn;
