import { ICON_NAME, Message, MessageBody, MessageIcon, type MessageIconProp, type MessageProp } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = MessageProp & MessageIconProp & {};

export default (prop: DemoProp) => (
  <Message
    color={ prop.color }
    dismissible={ prop.dismissible }
    variant={ prop.variant }>
    <MessageIcon name={ prop.name || ICON_NAME.circleInfo } />

    <MessageBody>
      { prop.children }
    </MessageBody>
  </Message>
);
