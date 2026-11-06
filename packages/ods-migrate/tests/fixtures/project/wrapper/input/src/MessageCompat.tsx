import type { FC } from 'react';
import { type MessageProp, Message as OdsMessage } from './ods';

const MessageCompat: FC<MessageProp> = ({ dismissible = false, ...rest }) => <OdsMessage dismissible={ dismissible } { ...rest } />;

export { MessageCompat, MessageCompat as Message };
