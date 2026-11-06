import { vi } from 'vitest';

vi.mock('@ovhcloud/ods-react', () => ({
  BADGE_COLOR: {
    primary: 'primary',
    neutral: 'neutral',
  },
}));
