import { OdsPassword } from '../../src';

export default {
  component: OdsPassword,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsPassword
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsPassword data-testid="render" />
);
