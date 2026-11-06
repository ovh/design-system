import { Badge, BADGE_STATUS, Divider } from '@ovhcloud/ods-react';

export const A = () => <Badge status="accent">a</Badge>;
export const B = () => <Badge status={ BADGE_STATUS.accent } emphasis="low">b</Badge>;
export const C = () => <Divider />;
export const D = () => <Divider style={{ margin: 0 }} />;
