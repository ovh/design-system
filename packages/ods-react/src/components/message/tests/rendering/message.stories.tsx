import { Message } from '../../src';

export default {
  component: Message,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Message
    data-testid="custom-style"
    style={{ height: '42px' }}>
    Custom Style
  </Message>
);

export const render = () => (
  <Message data-testid="render">
    Render
  </Message>
);
