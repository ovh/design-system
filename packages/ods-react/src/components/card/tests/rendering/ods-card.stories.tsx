import { OdsCard } from '../../src';

export default {
  component: OdsCard,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsCard
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsCard data-testid="render" />
);
