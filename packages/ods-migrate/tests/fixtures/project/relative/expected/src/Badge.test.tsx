import { vi } from 'vitest';
import { Badge } from './ods';

vi.mock('./ods', () => ({ BADGE_STATUS: { accent: 'accent' }, Badge: () => null }));

export const T = () => <Badge status="accent" />;
