import { vi } from 'vitest';

vi.mock('@ovhcloud/ods-react', () => ({
  BADGE_STATUS: {
    accent: 'accent',
    neutral: 'neutral',
  },
}));
