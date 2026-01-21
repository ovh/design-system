import { type MessageProp, Message as MessageRoot } from './components/message/Message';
import { MessageBody, type MessageBodyProp } from './components/message-body/MessageBody';
import { MessageIcon, type MessageIconProp } from './components/message-icon/MessageIcon';

const Message = {
  Body: MessageBody,
  Icon: MessageIcon,
  Root: MessageRoot,
};

export { Message };
export type { MessageProp, MessageBodyProp, MessageIconProp };
export { MESSAGE_I18N } from './constants/message-i18n';
export { MESSAGE_COLOR, MESSAGE_COLORS, type MessageColor } from './constants/message-color';
export { MESSAGE_VARIANT, MESSAGE_VARIANTS, type MessageVariant } from './constants/message-variant';
