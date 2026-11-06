import {
  BADGE_COLOR,
  BADGE_COLORS,
  Badge,
  Button,
} from '@ovhcloud/ods-react';
import { Badge as OtherBadge } from 'other-lib';

const COLOR_BY_STATE = {
  active: BADGE_COLOR.success,
  draft: BADGE_COLOR['primary'],
};

const options = { BADGE_COLORS };

const Example = ({ color, isNew, label, ...rest }) => (
  <>
    <Badge color="primary">Héllo 😀</Badge>
    <Badge color={ BADGE_COLOR.primary } size="sm">Constant</Badge>
    <Badge color={ isNew ? 'primary' : "neutral" }>Ternary</Badge>
    <Badge color={ color }>Variable</Badge>
    <Badge status="accent" color="primary">Both</Badge>
    <Badge { ...rest } />
    <Badge color={ label && 'warning' } />
    <Button color="critical">Migrated too</Button>
    <OtherBadge color="primary">Other lib</OtherBadge>
    <span color="primary" />
  </>
);

export { COLOR_BY_STATE, Example, options };
