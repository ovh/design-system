import { Badge, BADGE_COLOR, Divider } from '@ovhcloud/ods-react';

export const A = () => <Badge color="primary">a</Badge>;
export const B = () => <Badge color={ BADGE_COLOR.primary } emphasis="low">b</Badge>;
export const C = () => <Divider color="neutral" />;
export const D = () => <Divider color="neutral" style={{ margin: 0 }} />;
