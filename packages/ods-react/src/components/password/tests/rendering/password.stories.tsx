import { Password } from '../../src';

export default {
  component: Password,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Password
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Password data-testid="render" />
);
