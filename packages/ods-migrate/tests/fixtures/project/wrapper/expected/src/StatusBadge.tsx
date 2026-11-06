import type { ComponentProps } from 'react';
import { BADGE_STATUS, Badge } from './ods';

type StatusBadgeProps = Omit<ComponentProps<typeof Badge>, 'color' | 'status'> & { ok: boolean };

export function StatusBadge({ ok, ...rest }: StatusBadgeProps) {
  return <Badge status={ ok ? BADGE_STATUS.success : BADGE_STATUS.critical } { ...rest } />;
}
