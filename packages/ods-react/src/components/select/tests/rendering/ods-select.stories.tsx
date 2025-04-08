import { OdsSelect } from '../../src';

export default {
  component: OdsSelect,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsSelect
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsSelect data-testid="render" />
);
