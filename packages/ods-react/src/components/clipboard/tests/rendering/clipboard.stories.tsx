import { Clipboard } from '../../src';

export default {
  component: Clipboard,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Clipboard
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Clipboard data-testid="render" />
);
