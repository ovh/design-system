import { NumberInput } from '@ark-ui/react/number-input';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';

interface QuantityValueChangeDetail {
  value: string;
  valueAsNumber: number;
}

interface QuantityProp extends Omit<ComponentPropsWithRef<'div'>, 'inputMode'> {
  /**
   * The initial quantity value. Use when you don't need to control the value of the quantity.
   */
  defaultValue?: string,
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The maximum quantity that can be selected.
   */
  max?: number,
  /**
   * The minimum quantity that can be selected.
   */
  min?: number,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the value changes.
   */
  onValueChange?: (detail: QuantityValueChangeDetail) => void,
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean,
  /**
   * Whether the component is required.
   */
  required?: boolean,
  /**
   * The amount to increment or decrement the value by.
   */
  step?: number,
  /**
   * The controlled quantity value.
   */
  value?: string,
}

const Quantity: FC<QuantityProp> = forwardRef(({
  children,
  defaultValue,
  disabled,
  id,
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
  const fieldContext = useFormField();

  return (
    <NumberInput.Root
      clampValueOnBlur={ false }
      defaultValue={ defaultValue }
      disabled={ disabled }
      id={ id || fieldContext?.id }
      inputMode="decimal"
      invalid={ invalid || fieldContext?.invalid }
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
