import { parse } from 'graphql';

export const getOperationsNames = (request: string): string[] => {
  if (!request) return [];
  const { definitions } = parse(request);
  return definitions
    .filter((definition) => definition.kind === 'OperationDefinition')
    .map((operation) =>
      operation.kind === 'OperationDefinition' && operation.name?.value
        ? operation.name?.value
        : 'Unnamed Operation',
    );
};

export const isQueryValid = (value: string) => {
  try {
    parse(value);
    return true;
  } catch {
    return false;
  }
};
