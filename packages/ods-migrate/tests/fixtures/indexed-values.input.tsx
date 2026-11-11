import { type ComponentProps } from 'react';
import { Button, type BadgeProp, type ButtonProp, type ButtonVariant } from '@ovhcloud/ods-react';

// Values typed with an indexed type of the props, or a renamed type, follow the prop.
export const h: ButtonProp['variant'] = 'ghost';
export const c: ComponentProps<typeof Button>['color'] = 'primary';
export const r: Record<'a', BadgeProp['color']> = { a: 'primary' };
export const list: Array<ButtonProp['variant']> = ['outline', 'default'];
export const label: ButtonProp['aria-label'] = 'ghost';

export const pick = (v: ButtonVariant = 'default', w: BadgeProp['color'] = 'primary', x = 'ghost') => [v, w, x];

export function toned(tone?: BadgeProp['color']) {
  return tone ?? 'primary';
}
