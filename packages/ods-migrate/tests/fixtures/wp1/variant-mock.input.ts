import { vi } from 'vitest';

vi.mock('@ovhcloud/ods-react', () => ({
  BUTTON_VARIANT: { default: 'default', ghost: 'ghost', outline: 'outline' },
  MESSAGE_VARIANT: {},
}));
