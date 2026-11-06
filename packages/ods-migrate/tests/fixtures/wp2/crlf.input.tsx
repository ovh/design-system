import {
  Badge,
  BADGE_COLOR,
} from '@ovhcloud/ods-react';
import { DIVIDER_COLOR } from '@ovhcloud/ods-react';
import { Divider } from '@ovhcloud/ods-react';

export const A = () => (
  <>
    <Badge color={BADGE_COLOR.primary}>x</Badge>
    <Divider color={DIVIDER_COLOR.primary} />
  </>
);
