import { type BadgeStatus, type ButtonStatus } from '@ovhcloud/ods-react';

export const BADGE_FOR_BUTTON: Record<ButtonStatus, BadgeStatus> = { primary: 'accent', critical: 'critical', neutral: 'neutral' };
import { type MessageStatus } from '@ovhcloud/ods-react';

export const AGREE: Record<string, MessageStatus | BadgeStatus> = { info: 'accent' };
export const DISAGREE: Record<string, ButtonStatus | BadgeStatus> = { info: /* TODO(ods-v20): 'primary' is typed ButtonColor and BadgeColor, which map it to 'brand' and 'accent' in v20: pick the value by hand */ 'primary', rest: 'critical' };

export const Component = () => null;
