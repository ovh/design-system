import { type QuantityProp, Quantity as QuantityRoot } from './components/quantity/Quantity';
import { QuantityControl, type QuantityControlProp } from './components/quantity-control/QuantityControl';
import { QuantityInput, type QuantityInputProp } from './components/quantity-input/QuantityInput';

const Quantity = Object.assign(QuantityRoot, {
  Control: QuantityControl,
  Input: QuantityInput,
});

export { Quantity };
export { QuantityControl, QuantityInput };
export type { QuantityProp, QuantityControlProp, QuantityInputProp };
export { type QuantityValueChangeDetail } from './contexts/useQuantity';
