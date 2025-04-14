import { Checkbox } from '../../src';

export default {
  component: Checkbox,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Checkbox
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Checkbox data-testid="render" />
);
