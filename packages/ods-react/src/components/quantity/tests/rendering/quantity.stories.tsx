import { Quantity } from '../../src';

export default {
  component: Quantity,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Quantity
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Quantity data-testid="render" />
);
