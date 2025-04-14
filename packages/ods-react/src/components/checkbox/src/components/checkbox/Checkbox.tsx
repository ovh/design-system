import { Checkbox as VendorCheckbox } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './checkbox.module.scss';

type CheckboxCheckedState = boolean | 'indeterminate';

interface CheckboxCheckedChangeDetail {
  checked: CheckboxCheckedState,
}

interface CheckboxProp extends ComponentPropsWithRef<'label'> {
  checked?: CheckboxCheckedState;
  defaultChecked?: boolean,
  disabled?: boolean,
  invalid?: boolean,
  name?: string,
  onCheckedChange?: ((details: CheckboxCheckedChangeDetail) => void),
  required?: boolean,
  value?: string,
}

const Checkbox: FC<CheckboxProp> = forwardRef(({
  checked,
  children,
  className,
  defaultChecked,
  disabled,
  invalid,
  name,
  onCheckedChange,
  required,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorCheckbox.Root
      checked={ checked }
      className={ classNames(style['checkbox'], className) }
      defaultChecked={ defaultChecked }
      disabled={ disabled }
      invalid={ invalid }
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
