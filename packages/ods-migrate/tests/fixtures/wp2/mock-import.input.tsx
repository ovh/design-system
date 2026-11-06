import { vi } from 'vitest';
vi.mock('@ovhcloud/ods-react', async (importOriginal) => ({
  ...(await importOriginal()),
  'BADGE_COLOR': { primary: 'primary', success: 'success' },
  Badge: ({ color, children }: any) => <span data-color={color}>{children}</span>,
}));
vi.mock(import('@ovhcloud/ods-react'), () => ({ BUTTON_COLOR: { primary: 'primary' } }));
