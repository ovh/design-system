import { Badge, BADGE_STATUS, Divider } from '@ovhcloud/ods-react';

export const A = () => <Badge status="accent" emphasis="high">a</Badge>;
export const B = () => <Badge status={ BADGE_STATUS.accent } emphasis="low">b</Badge>;
export const C = () => <Divider style={{ backgroundColor: 'var(--ods-semantic-color-border-neutral)' }} />;
export const D = () => <Divider /* TODO(ods-v20): <Divider color="neutral">: keep the v19 look with style={{ backgroundColor: 'var(--ods-semantic-color-border-neutral)' }}, merged into your style */ color="neutral" style={{ margin: 0 }} />;
