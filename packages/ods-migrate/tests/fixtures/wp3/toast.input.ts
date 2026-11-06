import { toast, TOAST_COLOR, type ToastController } from '@ovhcloud/ods-react';

toast('a', { color: 'success' });
toast('b', { color: TOAST_COLOR.primary, duration: 3 });
toast.critical('c', { color: 'critical' });
toast.info('d', { duration: 1, color: 'neutral' });
toast('e', { color: tone });
toast('f', { color: 'neutral' });
toast('g', opts);

const primary = vi.fn();
export const c: Partial<ToastController> = { primary, success: vi.fn() };
export const d = { 'primary': vi.fn() } satisfies ToastController;
