import { vi } from 'vitest';
vi.mock('@ovhcloud/ods-react', async (importOriginal) => ({
  ...(await importOriginal()),
  'BADGE_STATUS': { accent: 'accent', success: 'success' },
  Badge: ({ color, children }: any) => <span data-color={color}>{children}</span>,
}));
vi.mock(import('@ovhcloud/ods-react'), () => ({ BUTTON_STATUS: { brand: 'brand' } }));
