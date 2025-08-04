import { RadioGroup as VendorRadioGroup } from '@ark-ui/react/radio-group';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './radioGroup.module.scss';

interface RadioValueChangeDetail {
  value: string | null;
}

interface RadioGroupProp extends ComponentPropsWithRef<'div'> {
  /**
   * The initial value of the checked radio. Use when you don't need to control the value of the radio group.
   */
  defaultValue?: string,
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the value changes.
   */
  onValueChange?: (detail: RadioValueChangeDetail) => void,
  /**
   * The orientation of the radio group.
   */
  orientation?: 'horizontal' | 'vertical',
  /**
   * The controlled value of the radio group.
   */
  value?: string,
}

const RadioGroup: FC<RadioGroupProp> = forwardRef(({
  children,
  className,
  defaultValue,
  disabled,
  name,
  onValueChange,
  orientation,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorRadioGroup.Root
      aria-labelledby={ props['aria-labelledby'] || '' }
      className={ classNames(style['radio-group'], className) }
      data-ods="radio-group"
      defaultValue={ defaultValue }
      disabled={ disabled }
      name={ name }
      onValueChange={ onValueChange }
      orientation={ orientation }
      ref={ ref }
      value={ value }
      { ...props }>
      { children }
    </VendorRadioGroup.Root>
  );
});

RadioGroup.displayName = 'RadioGroup';

export {
  RadioGroup,
  type RadioGroupProp,
  type RadioValueChangeDetail,
};
