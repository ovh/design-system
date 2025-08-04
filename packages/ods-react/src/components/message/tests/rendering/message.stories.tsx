import { Message, MessageBody, MessageIcon } from '../../src';

export default {
  component: Message,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Message
    data-testid="custom-style"
    style={{ height: '42px' }}>
    <MessageBody>
      Custom Style
    </MessageBody>
  </Message>
);

export const render = () => (
  <Message data-testid="render">
    <MessageIcon name="xmark" />
    <MessageBody>
      Render
    </MessageBody>
  </Message>
);
