import { Breadcrumb } from '../../src';

export default {
  component: Breadcrumb,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Breadcrumb
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Breadcrumb data-testid="render" />
);
