import { Textarea } from '../../src';

export default {
  component: Textarea,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Textarea
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Textarea data-testid="render" />
);
