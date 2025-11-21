import { type ReactNode } from 'react';
import vendorToast, { type Renderable, type Toast, type ValueOrFunction } from 'react-hot-toast/headless';
import { TOAST_COLOR } from '../constants/toast-color';
import { type ToastOption } from '../contexts/useToaster';

type ToastHandler = (content: ReactNode, option?: ToastOption) => string;

/** @internal */
interface ToastController {
  (content: ReactNode, option?: ToastOption): string,
  critical: ToastHandler,
  information: ToastHandler,
  neutral: ToastHandler,
  primary: ToastHandler,
  remove: (toastId: string) => void,
  success: ToastHandler,
  warning: ToastHandler,
}

function createToast(content: ReactNode, option?: ToastOption): string {
  return vendorToast.custom((content || '') as ValueOrFunction<Renderable, Toast>, option);
}

const toast: ToastController = Object.assign(createToast, {
  critical: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, color: TOAST_COLOR.critical }),
  information: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, color: TOAST_COLOR.information }),
  neutral: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, color: TOAST_COLOR.neutral }),
  primary: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, color: TOAST_COLOR.primary }),
  remove: (toastId: string) => vendorToast.remove(toastId),
  success: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, color: TOAST_COLOR.success }),
  warning: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, color: TOAST_COLOR.warning }),
});

export {
  type ToastController,
  toast,
};
