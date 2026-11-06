import { BadgeColor } from '@ovhcloud/ods-react';
export const m: Record<string, BadgeColor> = { a: 'primary' as const, b: 'primary' as BadgeColor };
export const l = { a: 'primary', b: ['primary'] } as const satisfies Record<string, BadgeColor | BadgeColor[]>;
export const n = <BadgeColor>'primary';
export const o: { tone: BadgeColor } = { tone: cond ? 'primary' : 'neutral' };
export const p: BadgeColor[] = ['primary'];
