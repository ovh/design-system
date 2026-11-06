import { type BadgeStatus } from '@ovhcloud/ods-react';
export const LABEL_BY_COLOR: Record<BadgeStatus, string> = {
  primary: 'primary',
  neutral: 'neutral',
  success: 'success',
};
type Row = { label: string; color: BadgeStatus };
export const ROWS: Array<{ i18nKey: string; color: BadgeStatus }> = [
  { i18nKey: 'primary', color: 'accent' },
];
export const CFG = { a: { trackingId: 'primary', color: 'neutral' } } satisfies Record<string, { trackingId: string; color: BadgeStatus }>;
