import toast, { Renderable } from 'react-hot-toast';
export const goToast = (
  text: string,
  type: 'success' | 'error' | 'custom',
  className?: string,
  icon?: Renderable,
  duration?: number,
): void => {
  switch (type) {
    case 'success':
      toast.success(text, {
        className: 'successToast',
        duration: 3000,
        position: 'bottom-center',
        icon: '✔️',
      });
      break;
    case 'error':
      toast.error(text, {
        className: 'errorToast',
        duration: 3000,
        position: 'bottom-center',
        icon: '❌',
      });
      break;
    case 'custom':
      toast.success(text, {
        className,
        icon,
        duration,
        position: 'bottom-center',
      });
      break;
    default:
      break;
  }
};
