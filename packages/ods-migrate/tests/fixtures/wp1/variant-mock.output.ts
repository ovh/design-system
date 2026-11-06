import { vi } from 'vitest';

vi.mock('@ovhcloud/ods-react', () => ({
  BUTTON_EMPHASIS: { high: 'high', low: 'low', medium: 'medium' },
  MESSAGE_EMPHASIS: {},
}));
