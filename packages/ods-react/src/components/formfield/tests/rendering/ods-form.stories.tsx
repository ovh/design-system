import { OdsForm } from '../../src';

export default {
  component: OdsForm,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsForm
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsForm
    data-testid="render" />
);
