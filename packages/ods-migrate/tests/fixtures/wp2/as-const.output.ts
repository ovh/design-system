import { BadgeStatus } from '@ovhcloud/ods-react';
export const m: Record<string, BadgeStatus> = { a: 'accent' as const, b: 'accent' as BadgeStatus };
export const l = { a: 'accent', b: ['accent'] } as const satisfies Record<string, BadgeStatus | BadgeStatus[]>;
export const n = <BadgeStatus>'accent';
export const o: { tone: BadgeStatus } = { tone: cond ? 'accent' : 'neutral' };
export const p: BadgeStatus[] = ['accent'];
