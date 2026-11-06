import {
  Badge,
  BADGE_STATUS,
} from '@ovhcloud/ods-react';
import { Divider } from '@ovhcloud/ods-react';

export const A = () => (
  <>
    <Badge status={BADGE_STATUS.accent}>x</Badge>
    <Divider />
  </>
);
