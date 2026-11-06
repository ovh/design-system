import { Message, type MessageProp } from '@ovhcloud/ods-react';

export default function StatusBanner(props: MessageProp) {
  return <Message { ...props } />;
}
