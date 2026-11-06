import type { ComponentProps } from 'react';
import { BADGE_COLOR, Badge } from './ods';

type StatusBadgeProps = Omit<ComponentProps<typeof Badge>, 'color'> & { ok: boolean };

export function StatusBadge({ ok, ...rest }: StatusBadgeProps) {
  return <Badge color={ ok ? BADGE_COLOR.success : BADGE_COLOR.critical } { ...rest } />;
}
