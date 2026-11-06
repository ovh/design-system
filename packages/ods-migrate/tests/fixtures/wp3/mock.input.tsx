import { vi } from 'vitest';
import { toast } from '@ovhcloud/ods-react';

vi.mock('@ovhcloud/ods-react', async (importOriginal) => ({
  ...(await importOriginal()),
  'BADGE_COLOR': { 'primary': 'primary', success: 'success' },
  Badge: ({ color, children }: any) => <span data-color={ color }>{ children }</span>,
}));
vi.mock(import('@ovhcloud/ods-react'), () => ({ BUTTON_COLOR: { primary: 'primary' } }));
jest.mock('@ovh-ux/muk', () => ({ toast: Object.assign(vi.fn(), { primary: vi.fn(), success: vi.fn() }), DIVIDER_COLOR: {} }));
vi.doMock('@ovhcloud/ods-react', () => ({ TOAST_COLOR }));
vi.mock('other-lib', () => ({ BADGE_COLOR: {} }));

toast.primary('x');
expect(toast.primary).toHaveBeenCalled();
