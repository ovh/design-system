import { Quantity, QuantityControl, QuantityInput } from '../../src';

export default {
  component: Quantity,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Quantity
    data-testid="custom-style"
    style={{ height: '42px' }}>
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);

export const render = () => (
  <Quantity data-testid="render">
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);
