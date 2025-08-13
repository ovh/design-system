import { Meter } from '../../src';

export default {
  component: Meter,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Meter
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Meter data-testid="render" />
);
