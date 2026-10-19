import { type ReactNode } from 'react';
import vendorToast, { type Renderable, type Toast, type ValueOrFunction } from 'react-hot-toast/headless';
import { TOAST_STATUS } from '../constants/toast-status';
import { type ToastOption } from '../contexts/useToaster';

type ToastHandler = (content: ReactNode, option?: ToastOption) => string;

/** @internal */
interface ToastController {
  (content: ReactNode, option?: ToastOption): string,
  accent: ToastHandler,
  critical: ToastHandler,
  information: ToastHandler,
  neutral: ToastHandler,
  remove: (toastId: string) => void,
  success: ToastHandler,
  warning: ToastHandler,
}

function createToast(content: ReactNode, option?: ToastOption): string {
  return vendorToast.custom((content || '') as ValueOrFunction<Renderable, Toast>, option);
}

const toast: ToastController = Object.assign(createToast, {
  accent: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.accent }),
  critical: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.critical }),
  information: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.information }),
  neutral: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.neutral }),
  remove: (toastId: string) => vendorToast.dismiss(toastId),
  success: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.success }),
  warning: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.warning }),
});

export {
  type ToastController,
  toast,
};
