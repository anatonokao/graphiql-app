import toast from 'react-hot-toast';

export const goToast = (text: string, type: 'success' | 'error'): void => {
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
    default:
      break;
  }
};
