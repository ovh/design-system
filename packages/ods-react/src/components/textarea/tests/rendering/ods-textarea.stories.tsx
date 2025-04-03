import { OdsTextarea } from '../../src';

export default {
  component: OdsTextarea,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsTextarea
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsTextarea data-testid="render" />
);
