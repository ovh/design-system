import { OdsDivider } from '../../src';

export default {
  component: OdsDivider,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsDivider
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsDivider data-testid="render" />
);
