import { parse } from 'graphql/index';

export const isQueryValid = (value: string) => {
  try {
    parse(value);
    return true;
  } catch {
    return false;
  }
};
