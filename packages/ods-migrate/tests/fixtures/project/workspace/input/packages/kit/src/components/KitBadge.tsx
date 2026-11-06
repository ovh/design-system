import { Badge, Skeleton } from '@ovhcloud/ods-react';
import type { KitBadgeProps } from './KitBadge.props';

export const KitBadge = ({ isLoading, children, ...props }: KitBadgeProps) => (isLoading ? <Skeleton /> : <Badge { ...props }>{ children }</Badge>);
