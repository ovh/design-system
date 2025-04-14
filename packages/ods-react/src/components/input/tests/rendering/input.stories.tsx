import { Input } from '../../src';

export default {
  component: Input,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Input
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Input data-testid="render" />
);
