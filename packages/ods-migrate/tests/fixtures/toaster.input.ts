import { TOAST_COLOR, type ToastColor, toast } from '@ovhcloud/ods-react';

const LEVEL: ToastColor = 'primary';

export function notify(message: string): string {
  toast.critical(message);
  return toast.primary(message, { duration: TOAST_COLOR.primary === LEVEL ? 2000 : 5000 });
}
