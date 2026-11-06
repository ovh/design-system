import { type BadgeColor } from '@ovhcloud/ods-react';
export const LABEL_BY_COLOR: Record<BadgeColor, string> = {
  primary: 'primary',
  neutral: 'neutral',
  success: 'success',
};
type Row = { label: string; color: BadgeColor };
export const ROWS: Array<{ i18nKey: string; color: BadgeColor }> = [
  { i18nKey: 'primary', color: 'primary' },
];
export const CFG = { a: { trackingId: 'primary', color: 'neutral' } } satisfies Record<string, { trackingId: string; color: BadgeColor }>;
