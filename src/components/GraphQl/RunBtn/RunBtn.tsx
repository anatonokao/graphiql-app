import React, { useState } from 'react';
import { useAppSelector } from '@/store/hooks.ts';
import { graphqlAPI } from '@/store/GraphQl/graphqlAPI/graphqlAPI.ts';
import {
  getOperationsNames,
  isJsonValid,
} from '@/components/GraphQl/helpers.ts';
import styles from './RunBtn.module.scss';
const RunBtn = () => {
  const [operationsNames, setOperationNames] = useState<string[]>([]);
  const isSingleOperation = operationsNames.length <= 1;

  const { apiUrl, request, headers, vars } = useAppSelector(
    (state) => state.graphqlSlice,
  );

  const [getData, { isFetching }] = graphqlAPI.useLazyGetDataQuery();

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
      headers: isJsonValid(headers) || {},
      vars: isJsonValid(vars) || {},
      operationName,
    });
  };

  return (
    <div className={styles.container}>
      {isSingleOperation ? (
        <button
          type="button"
          onClick={btnHandler}
          disabled={isFetching}
          className={styles.runBtn}
        >
          Run
        </button>
      ) : (
        <div className={styles.btnsContainer}>
          {operationsNames.map((operation, index) => (
            <button
              key={index}
              onClick={() => makeRequest(operation)}
              className={styles.selectBtn}
            >
              {operation}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RunBtn;
