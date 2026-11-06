import { Badge, BADGE_COLOR, BADGE_STATUS, Button, BUTTON_COLOR } from '@ovhcloud/ods-react';

export const A = () => <Badge status={BADGE_STATUS.accent} color={BADGE_COLOR.primary}>x</Badge>;
export const B = () => <Badge color="primary">y</Badge>;
export const C = () => <Button status="critical" color={BUTTON_COLOR.information}>z</Button>;
