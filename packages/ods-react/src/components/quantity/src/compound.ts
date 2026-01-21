import { type QuantityProp, Quantity as QuantityRoot } from './components/quantity/Quantity';
import { QuantityControl, type QuantityControlProp } from './components/quantity-control/QuantityControl';
import { QuantityInput, type QuantityInputProp } from './components/quantity-input/QuantityInput';

const Quantity = {
  Control: QuantityControl,
  Input: QuantityInput,
  Root: QuantityRoot,
};

export { Quantity };
export type { QuantityProp, QuantityControlProp, QuantityInputProp };
export { type QuantityValueChangeDetail } from './contexts/useQuantity';
