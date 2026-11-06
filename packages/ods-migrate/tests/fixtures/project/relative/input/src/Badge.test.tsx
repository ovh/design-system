import { vi } from 'vitest';
import { Badge } from './ods';

vi.mock('./ods', () => ({ BADGE_COLOR: { primary: 'primary' }, Badge: () => null }));

export const T = () => <Badge color="primary" />;
