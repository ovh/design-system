import { type ComponentProps } from 'react';
import { Badge, type BadgeProp, type DividerProp } from '@ovhcloud/ods-react';

type LocalBadgeProp = BadgeProp;
export type T1 = BadgeProp['status'];
export type T2 = ComponentProps<typeof Badge>['status'];
export type T3 = Pick<BadgeProp, 'status' | 'size'>;
export type T4 = Omit<BadgeProp, 'color' | 'status' | 'children'>;
export type T5 = Omit<LocalBadgeProp, "color" | "status">;
export type T6 = Omit<DividerProp, 'color'>;
export type T7 = Omit<DividerProp, 'color' | 'className'>;
export type T8 = /* TODO(ods-v20): DividerProp['color'] is removed in v20: override the `background-color` in CSS instead */ DividerProp['color'];
export type T9 = /* TODO(ods-v20): Pick<DividerProp, 'color'>: color is removed in v20: override the `background-color` in CSS instead */ Pick<DividerProp, 'color'>;
export type T10 = Omit<BadgeProp, 'color' | 'status'>;
export type T11 = Omit<OtherProp, 'color'>;
