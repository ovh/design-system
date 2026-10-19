import { type MessageProp, Message as MessageRoot } from './components/message/Message';
import { MessageBody, type MessageBodyProp } from './components/message-body/MessageBody';
import { MessageIcon, type MessageIconProp } from './components/message-icon/MessageIcon';

const Message = Object.assign(MessageRoot, {
  Body: MessageBody,
  Icon: MessageIcon,
});

export { Message };
export { MessageBody, MessageIcon };
export type { MessageProp, MessageBodyProp, MessageIconProp };
export { MESSAGE_I18N } from './constants/message-i18n';
export { MESSAGE_EMPHASIS, MESSAGE_EMPHASES, type MessageEmphasis } from './constants/message-emphasis';
export { MESSAGE_STATUS, MESSAGE_STATUSES, type MessageStatus } from './constants/message-status';
