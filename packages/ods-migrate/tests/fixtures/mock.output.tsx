import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { BADGE_STATUS } from '@ovh-ux/muk';
import { StatusBadge } from '../StatusBadge';

vi.mock('@ovhcloud/ods-react', () => ({
  Badge: ({ children }) => <span>{ children }</span>,
  BADGE_STATUS: { accent: 'accent', success: 'success' },
}));

vi.mock('other-lib', () => ({ BADGE_COLOR: {} }));

it('renders', () => {
  render(<StatusBadge color={ BADGE_STATUS.accent } />);
});
