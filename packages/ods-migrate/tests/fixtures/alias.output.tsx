import { Badge as OdsBadge, BADGE_STATUS as BC, BADGE_STATUS } from '@ovhcloud/ods-react';
import * as ODS from '@ovhcloud/ods-react';

export const A = () => <OdsBadge status={ BC.accent }>Alias</OdsBadge>;
export const B = () => <ODS.Badge color="primary" />;
export const C = BADGE_STATUS.accent;
