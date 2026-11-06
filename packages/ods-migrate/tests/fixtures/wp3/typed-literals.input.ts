import { type BadgeColor, type ButtonColor, type MessageColor } from '@ovhcloud/ods-react';

export const BADGE_FOR_BUTTON: Record<ButtonColor, BadgeColor> = { primary: 'primary', critical: 'critical', neutral: 'neutral' };
export const BADGE_FOR_MESSAGE: Record<MessageColor, BadgeColor> = { primary: 'primary' };
export const LABEL_BY_COLOR: Record<BadgeColor, string> = {
  primary: 'primary',
  neutral: 'neutral',
};
export const ROWS: Array<{ i18nKey: string; color: BadgeColor }> = [
  { i18nKey: 'primary', color: 'primary' },
];
export const CFG = { a: { trackingId: 'primary', color: 'neutral' } } satisfies Record<string, { trackingId: string; color: BadgeColor }>;
export const STYLE: { badge: BadgeColor; button: ButtonColor } = { badge: 'primary', button: 'primary' };
export const MIXED: BadgeColor | ButtonColor = 'primary';
export const m: Record<string, BadgeColor> = { a: 'primary' as const, b: 'primary' as BadgeColor };
export const l = { a: 'primary', b: ['primary'] } as const satisfies Record<string, BadgeColor | BadgeColor[]>;
export const n = <BadgeColor>'primary';
export const o: { tone: BadgeColor } = { tone: cond ? 'primary' : 'neutral' };
export const p: BadgeColor[] = ['primary'];
export const q: ReadonlyArray<ButtonColor> = ['success'];
