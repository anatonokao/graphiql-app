import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export const getErrors = (
  error: FetchBaseQueryError | SerializedError,
): string[] => {
  const isGraphQLError = 'status' in error && typeof error.status === 'number';

  if (isGraphQLError) {
    const graphQLError = error as ErrorRespGQL;
    return graphQLError.data.errors.map(({ message }): string => message);
  }
  if ('error' in error) {
    return [error.error];
  }
  return ['UNKNOWN_ERROR'];
};

export interface ErrorRespGQL {
  status: number;
  data: ErrorDataGQL;
}

export interface ErrorDataGQL {
  errors: ErrorGQL[];
}

export interface ErrorGQL {
  message: string;
  locations: Location[];
  extensions: Extensions;
}

export interface Location {
  line: number;
  column: number;
}

export interface Extensions {
  code: string;
}
