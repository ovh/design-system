import { type BadgeProp, type ButtonProp } from '@ovhcloud/ods-react';

interface StatusBadgeProp extends BadgeProp {
  status: 'ok' | 'ko';
}
interface OwnColorProp extends Omit<BadgeProp, 'size'> {
  color: string;
}
type TileProp = Omit<ButtonProp, 'children'> & { emphasis?: string, status?: string };
interface Kept extends Omit<BadgeProp, 'color'> {
  color: string;
}
