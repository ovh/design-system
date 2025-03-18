import { OdsSpinner } from '../../src';

export default {
  component: OdsSpinner,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsSpinner
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsSpinner
    data-testid="render" />
);
