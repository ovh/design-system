import { Card } from '../../src';

export default {
  component: Card,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Card
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Card data-testid="render" />
);
