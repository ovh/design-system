import { Divider } from '../../src';

export default {
  component: Divider,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Divider
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Divider data-testid="render" />
);
