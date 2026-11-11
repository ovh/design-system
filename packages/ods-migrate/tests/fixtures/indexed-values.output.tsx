import { type ComponentProps } from 'react';
import { Button, type BadgeProp, type ButtonProp, type ButtonEmphasis } from '@ovhcloud/ods-react';

// Values typed with an indexed type of the props, or a renamed type, follow the prop.
export const h: ButtonProp['emphasis'] = 'low';
export const c: ComponentProps<typeof Button>['status'] = 'brand';
export const r: Record<'a', BadgeProp['status']> = { a: 'accent' };
export const list: Array<ButtonProp['emphasis']> = ['medium', 'high'];
export const label: ButtonProp['aria-label'] = 'ghost';

export const pick = (v: ButtonEmphasis = 'high', w: BadgeProp['status'] = 'accent', x = 'ghost') => [v, w, x];

export function toned(tone?: BadgeProp['status']) {
  return tone ?? 'primary';
}
