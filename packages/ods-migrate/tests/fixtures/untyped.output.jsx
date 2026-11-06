import {
  BADGE_STATUS,
  BADGE_STATUSES,
  Badge,
  Button,
} from '@ovhcloud/ods-react';
import { Badge as OtherBadge } from 'other-lib';

const COLOR_BY_STATE = {
  active: BADGE_STATUS.success,
  draft: BADGE_STATUS['accent'],
};

const options = { BADGE_COLORS: BADGE_STATUSES };

const Example = ({ color, isNew, label, ...rest }) => (
  <>
    <Badge status="accent">Héllo 😀</Badge>
    <Badge status={ BADGE_STATUS.accent } size="sm">Constant</Badge>
    <Badge status={ isNew ? 'accent' : "neutral" }>Ternary</Badge>
    <Badge status={ color }>Variable</Badge>
    <Badge status="accent">Both</Badge>
    <Badge /* TODO(ods-v20): <Badge {...…}>: if the object passed here with {...} has these keys, change them (TypeScript does not flag them there): color → status */ { ...rest } />
    <Badge status={ label && 'warning' } />
    <Button status="critical">Migrated too</Button>
    <OtherBadge color="primary">Other lib</OtherBadge>
    <span color="primary" />
  </>
);

export { COLOR_BY_STATE, Example, options };
