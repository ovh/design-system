import { TOAST_STATUS, type ToastStatus, toast } from '@ovhcloud/ods-react';

const LEVEL: ToastStatus = 'accent';

export function notify(message: string): string {
  toast.critical(message);
  return toast.accent(message, { duration: TOAST_STATUS.accent === LEVEL ? 2000 : 5000 });
}
