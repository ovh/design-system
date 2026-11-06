import { type BadgeStatus, type ButtonStatus, type MessageStatus } from '@ovhcloud/ods-react';

export const BADGE_FOR_BUTTON: Record<ButtonStatus, BadgeStatus> = { primary: 'accent', critical: 'critical', neutral: 'neutral' };
export const BADGE_FOR_MESSAGE: Record<MessageStatus, BadgeStatus> = { primary: 'accent' };
export const LABEL_BY_COLOR: Record<BadgeStatus, string> = {
  primary: 'primary',
  neutral: 'neutral',
};
export const ROWS: Array<{ i18nKey: string; color: BadgeStatus }> = [
  { i18nKey: 'primary', color: 'accent' },
];
export const CFG = { a: { trackingId: 'primary', color: 'neutral' } } satisfies Record<string, { trackingId: string; color: BadgeStatus }>;
export const STYLE: { badge: BadgeStatus; button: ButtonStatus } = { badge: 'accent', button: 'brand' };
export const MIXED: BadgeStatus | ButtonStatus = /* TODO(ods-v20): 'primary' is typed BadgeColor and ButtonColor, which map it to 'accent' and 'brand' in v20: pick the value by hand */ 'primary';
export const m: Record<string, BadgeStatus> = { a: 'accent' as const, b: 'accent' as BadgeStatus };
export const l = { a: 'accent', b: ['accent'] } as const satisfies Record<string, BadgeStatus | BadgeStatus[]>;
export const n = <BadgeStatus>'accent';
export const o: { tone: BadgeStatus } = { tone: cond ? 'accent' : 'neutral' };
export const p: BadgeStatus[] = ['accent'];
export const q: ReadonlyArray<ButtonStatus> = [/* TODO(ods-v20): 'success' (ButtonColor) has no v20 equivalent: a Button shows no status in v20: pick `status` brand, neutral or critical (brand is the default), and show the status with a Badge or a Message next to it */ 'success'];
