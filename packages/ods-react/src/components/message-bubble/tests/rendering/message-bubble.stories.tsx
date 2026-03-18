import { MessageBubble } from '../../src';

export default {
  component: MessageBubble,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <MessageBubble style={{ color: '#ff0000' }} />
);

export const render = () => (
  <MessageBubble />
);
