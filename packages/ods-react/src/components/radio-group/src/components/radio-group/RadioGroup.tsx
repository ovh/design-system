import { RadioGroup as VendorRadioGroup } from '@ark-ui/react/radio-group';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './radioGroup.module.scss';

interface RadioValueChangeDetail {
  value: string | null;
}

interface RadioGroupProp extends ComponentPropsWithRef<'div'> {
  defaultValue?: string,
  disabled?: boolean,
  name?: string,
  onValueChange?: (detail: RadioValueChangeDetail) => void,
  orientation?: 'horizontal' | 'vertical',
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
      className={ classNames(style['radio-group'], className) }
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
