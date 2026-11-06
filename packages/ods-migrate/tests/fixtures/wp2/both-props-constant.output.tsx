import { Badge, BADGE_STATUS, Button } from '@ovhcloud/ods-react';

export const A = () => <Badge status={BADGE_STATUS.accent}>x</Badge>;
export const B = () => <Badge status="accent">y</Badge>;
export const C = () => <Button status="critical">z</Button>;
