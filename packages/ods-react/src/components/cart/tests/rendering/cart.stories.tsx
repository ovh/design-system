import { Cart } from '../../src';

export default {
  component: Cart,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Cart style={{ height: '42px' }} />
);

export const render = () => (
  <Cart />
);
