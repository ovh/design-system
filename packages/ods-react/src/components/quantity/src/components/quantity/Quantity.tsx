import { NumberInput } from '@ark-ui/react/number-input';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface QuantityValueChangeDetail {
  value: string;
  valueAsNumber: number;
}

interface QuantityProp extends Omit<ComponentPropsWithRef<'div'>, 'inputMode'> {
  defaultValue?: string,
  disabled?: boolean,
  invalid?: boolean,
  max?: number,
  min?: number,
  name?: string,
  onValueChange?: (detail: QuantityValueChangeDetail) => void,
  readOnly?: boolean,
  required?: boolean,
  step?: number,
  value?: string,
}

const Quantity: FC<QuantityProp> = forwardRef(({
  children,
  defaultValue,
  disabled,
  invalid,
  max,
  min,
  name,
  onValueChange,
  readOnly,
  required,
  step,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <NumberInput.Root
      clampValueOnBlur={ false }
      defaultValue={ defaultValue }
      disabled={ disabled }
      inputMode="decimal"
      invalid={ invalid }
      max={ max }
      min={ min }
      name={ name }
      onValueChange={ onValueChange }
      readOnly={ readOnly }
      ref={ ref }
      required={ required }
      step={ step }
      value={ value }
      { ...props }>
      { children }
    </NumberInput.Root>
  );
});

Quantity.displayName = 'Quantity';

export {
  Quantity,
  type QuantityProp,
  type QuantityValueChangeDetail,
};
