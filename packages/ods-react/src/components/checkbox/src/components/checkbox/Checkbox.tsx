import { Checkbox as VendorCheckbox } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import style from './checkbox.module.scss';

type CheckboxCheckedState = boolean | 'indeterminate';

interface CheckboxCheckedChangeDetail {
  checked: CheckboxCheckedState,
}

interface CheckboxProp extends ComponentPropsWithRef<'label'> {
  /**
   * The controlled checked state of the checkbox.
   */
  checked?: CheckboxCheckedState;
  /**
   * The initial checked state of the checkbox. Use when you don't need to control the checked state of the checkbox.
   */
  defaultChecked?: boolean,
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the checked state changes.
   */
  onCheckedChange?: (detail: CheckboxCheckedChangeDetail) => void,
  /**
   * Whether the component is required.
   */
  required?: boolean,
  /**
   * The value of form element. Useful for form submission.
   */
  value?: string,
}

const Checkbox: FC<CheckboxProp> = forwardRef(({
  checked,
  children,
  className,
  defaultChecked,
  disabled,
  id,
  invalid,
  name,
  onCheckedChange,
  required,
  value,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();

  return (
    <VendorCheckbox.Root
      checked={ checked }
      className={ classNames(style['checkbox'], className) }
      defaultChecked={ defaultChecked }
      disabled={ disabled }
      id={ id || fieldContext?.id }
      invalid={ invalid || fieldContext?.invalid }
      name={ name }
      onCheckedChange={ onCheckedChange }
      ref={ ref }
      required={ required }
      value={ value }
      { ...props }>
      { children }
    </VendorCheckbox.Root>
  );
});

Checkbox.displayName = 'Checkbox';

export {
  Checkbox,
  type CheckboxCheckedChangeDetail,
  type CheckboxCheckedState,
  type CheckboxProp,
};
