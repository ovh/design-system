import { type ReactNode } from 'react';
import vendorToast, { type Renderable, type Toast, type ValueOrFunction } from 'react-hot-toast/headless';
import { warnDeprecated } from '../../../../utils/deprecation';
import { TOAST_COLOR } from '../constants/toast-color';
import { TOAST_STATUS, type ToastStatus } from '../constants/toast-status';
import { type Toast as ToastItem, type ToastOption } from '../contexts/useToaster';

type ToastHandler = (content: ReactNode, option?: ToastOption) => string;

/** @internal */
interface ToastController {
  (content: ReactNode, option?: ToastOption): string,
  accent: ToastHandler,
  critical: ToastHandler,
  information: ToastHandler,
  neutral: ToastHandler,
  /**
   * @deprecated
   * Use toast.accent() instead, removed in v21.
   */
  primary: ToastHandler,
  remove: (toastId: string) => void,
  success: ToastHandler,
  warning: ToastHandler,
}

function createToast(content: ReactNode, option?: ToastOption): string {
  return vendorToast.custom((content || '') as ValueOrFunction<Renderable, Toast>, option);
}

/** @internal */
function getToastStatus(toast: ToastItem): ToastStatus | undefined {
  return toast.status ?? (toast.color === TOAST_COLOR.primary ? TOAST_STATUS.accent : toast.color);
}

const toast: ToastController = Object.assign(createToast, {
  accent: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.accent }),
  critical: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.critical }),
  information: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.information }),
  neutral: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.neutral }),
  primary: (content: ReactNode, option?: ToastOption) => {
    warnDeprecated('toast.primary', '[DEPRECATED]: toast.primary() is deprecated and will be removed in v21, use toast.accent() instead.');
    return toast.accent(content, option);
  },
  remove: (toastId: string) => vendorToast.dismiss(toastId),
  success: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.success }),
  warning: (content: ReactNode, option?: ToastOption) => createToast(content, { ...option, status: TOAST_STATUS.warning }),
});

export {
  getToastStatus,
  type ToastController,
  toast,
};
