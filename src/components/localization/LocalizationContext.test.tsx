import { describe, expect } from 'vitest';
import { useLocalization } from '@/components/localization/LocalizationContext.tsx';
describe('UseLocalization Hook', () => {
  it.fails('Check UseLocalization Error', () => {
    expect(useLocalization()).toThrowError();
  });
});
