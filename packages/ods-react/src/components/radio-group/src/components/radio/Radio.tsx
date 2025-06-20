import { RadioGroup } from '@ark-ui/react/radio-group';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import style from './radio.module.scss';

interface RadioProp extends ComponentPropsWithRef<'label'> {
  /**
   * Whether the radio is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the radio is in error state.
   */
  invalid?: boolean,
  /**
   * Whether the radio is required.
   */
  required?: boolean,
  /**
   * The value of the radio.
   */
  value: string,
}

const Radio: FC<RadioProp> = forwardRef(({
  children,
  className,
  disabled,
  id,
  invalid,
  onChange,
  required,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();

  return (
    <RadioGroup.Item
      className={ classNames(style['radio'], className) }
      disabled={ disabled }
      id={ id || fieldContext?.id }
      invalid={ invalid || fieldContext?.invalid }
      ref={ ref }
      { ...props }>
      { children }

      <RadioGroup.ItemHiddenInput
        aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
        required={ required } />
    </RadioGroup.Item>
  );
});

Radio.displayName = 'Radio';

export {
  Radio,
  type RadioProp,
};
