import { describe, expect, test } from 'vitest';
import { getErrors } from '@/store/store-helpers.ts';
import { mocks } from '../../tests/mocks.ts';
describe('Store helpers', () => {
  test('Check getErrors', async () => {
    const result = getErrors(mocks.ErrorFromApi);

    expect(result).toStrictEqual([
      'GraphQL Error: Document does not contain any operations',
    ]);
  });
});
