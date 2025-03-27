import { OdsTabs } from '../../src';

export default {
  component: OdsTabs,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsTabs
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsTabs
    data-testid="render" />
);
