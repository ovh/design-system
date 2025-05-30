import { Range } from '../../src';

export default {
  component: Range,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Range
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Range data-testid="render" />
);
