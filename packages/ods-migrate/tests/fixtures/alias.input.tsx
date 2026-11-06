import { Badge as OdsBadge, BADGE_COLOR as BC, BADGE_STATUS } from '@ovhcloud/ods-react';
import * as ODS from '@ovhcloud/ods-react';

export const A = () => <OdsBadge color={ BC.primary }>Alias</OdsBadge>;
export const B = () => <ODS.Badge color="primary" />;
export const C = BADGE_STATUS.accent;
