import { toast, type ToastController } from '@ovhcloud/ods-react';

toast.success('a');
toast.accent('b', { duration: 3 });
toast.critical('c');
toast.info('d', { duration: 1 });
toast('e', { /* TODO(ods-v20): toast(…, { color }): the color option is removed in v20: call the helper of the status instead, e.g. toast.success() */ color: tone });
toast('f', { /* TODO(ods-v20): toast(…, { color }): the color option is removed in v20: call the helper of the status instead, e.g. toast.success() */ color: 'neutral' });
toast('g', opts);

const primary = vi.fn();
export const c: Partial<ToastController> = { accent: primary, success: vi.fn() };
export const d = { 'accent': vi.fn() } satisfies ToastController;
