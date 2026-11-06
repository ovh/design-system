import { BADGE_STATUS } from '@ovhcloud/ods-react';
import {
  CARD_STATUS,
} from '@ovhcloud/ods-react';
export { MESSAGE_STATUS, type MessageStatus, /* TODO(ods-v20): DIVIDER_COLOR has no v20 equivalent: the v20 Divider has a single color: delete the prop, or set `background-color: var(--ods-semantic-color-interaction-neutral-hover)` through a `className` or `style` to keep the v19 neutral grey */ DIVIDER_COLOR, TAG_STATUS as COLORS } from '@ovhcloud/ods-react';

export const a = [BADGE_STATUS.accent, BADGE_STATUS.neutral, CARD_STATUS.accent, CARD_STATUS.neutral];
