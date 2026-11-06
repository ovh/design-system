import { type BadgeProp, type ButtonProp } from '@ovhcloud/ods-react';

interface StatusBadgeProp extends Omit<BadgeProp, 'status'> {
  status: 'ok' | 'ko';
}
interface OwnColorProp extends Omit<BadgeProp, 'size'> {
  /* TODO(ods-v20): <OwnColorProp> declares its own color, typed never on Badge in v20: rename it, or omit it with Omit<BadgeProp, 'color'> */ color: string;
}
type TileProp = Omit<ButtonProp, 'children' | 'status' | 'emphasis'> & { emphasis?: string, status?: string };
interface Kept extends Omit<BadgeProp, 'color' | 'status'> {
  color: string;
}
