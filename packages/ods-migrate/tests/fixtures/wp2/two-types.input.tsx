import { type BadgeColor, type ButtonColor } from '@ovhcloud/ods-react';

export const BADGE_FOR_BUTTON: Record<ButtonColor, BadgeColor> = { primary: 'primary', critical: 'critical', neutral: 'neutral' };
import { type MessageColor } from '@ovhcloud/ods-react';

export const AGREE: Record<string, MessageColor | BadgeColor> = { info: 'primary' };
export const DISAGREE: Record<string, ButtonColor | BadgeColor> = { info: 'primary', rest: 'critical' };

export const Component = () => null;
