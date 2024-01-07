import { describe, expect, expectTypeOf, test } from 'vitest';
import { editorTheme } from '@/components/GraphQl/customTheme.ts';
describe('Custom Theme', () => {
  test('Check type of returns value', async () => {
    const theme = editorTheme();
    expect(theme).toBeTypeOf('object');
    expectTypeOf(theme).toBeObject();
  });
});
