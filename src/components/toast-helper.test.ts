import { describe, expect, test } from 'vitest';
import toast from 'react-hot-toast';
import { goToast } from '@/components/toast-helper.ts';
describe('Toasts', () => {
  test('Check goToast success', async () => {
    const successMock = vi.spyOn(toast, 'success');

    const successData = {
      className: 'successToast',
      duration: 3000,
      position: 'bottom-center',
      icon: '✔️',
    };

    goToast('success', 'success');
    expect(successMock).toBeCalledWith('success', successData);
  });

  test('Check goToast error', async () => {
    const errorMock = vi.spyOn(toast, 'error');

    const errorData = {
      className: 'errorToast',
      duration: 3000,
      position: 'bottom-center',
      icon: '❌',
    };

    goToast('error', 'error');
    expect(errorMock).toBeCalledWith('error', errorData);
  });

  test('Check goToast custom', async () => {
    const customMock = vi.spyOn(toast, 'success');

    const customData = {
      className: 'customToast',
      duration: 8000,
      icon: '🍪',
      position: 'bottom-center',
    };

    goToast(
      'custom',
      'custom',
      customData.className,
      customData.icon,
      customData.duration,
    );
    expect(customMock).toBeCalledWith('custom', customData);
  });
});
