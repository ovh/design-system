import { vi } from 'vitest';
import { toast } from '@ovhcloud/ods-react';

vi.mock('@ovhcloud/ods-react', async (importOriginal) => ({
  ...(await importOriginal()),
  'BADGE_STATUS': { 'accent': 'accent', success: 'success' },
  Badge: ({ color, children }: any) => <span data-color={ color }>{ children }</span>,
}));
vi.mock(import('@ovhcloud/ods-react'), () => ({ BUTTON_STATUS: { brand: 'brand' } }));
jest.mock('@ovh-ux/muk', () => ({ toast: Object.assign(vi.fn(), { accent: vi.fn(), success: vi.fn() }), DIVIDER_COLOR: {} }));
vi.doMock('@ovhcloud/ods-react', () => ({ TOAST_STATUS: TOAST_COLOR }));
vi.mock('other-lib', () => ({ BADGE_COLOR: {} }));

toast.accent('x');
expect(toast.accent).toHaveBeenCalled();
