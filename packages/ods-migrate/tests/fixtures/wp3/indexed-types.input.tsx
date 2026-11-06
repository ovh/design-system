import { type ComponentProps } from 'react';
import { Badge, type BadgeProp, type DividerProp } from '@ovhcloud/ods-react';

type LocalBadgeProp = BadgeProp;
export type T1 = BadgeProp['color'];
export type T2 = ComponentProps<typeof Badge>['color'];
export type T3 = Pick<BadgeProp, 'color' | 'size'>;
export type T4 = Omit<BadgeProp, 'color' | 'children'>;
export type T5 = Omit<LocalBadgeProp, "color">;
export type T6 = Omit<DividerProp, 'color'>;
export type T7 = Omit<DividerProp, 'color' | 'className'>;
export type T8 = DividerProp['color'];
export type T9 = Pick<DividerProp, 'color'>;
export type T10 = Omit<BadgeProp, 'color' | 'status'>;
export type T11 = Omit<OtherProp, 'color'>;
