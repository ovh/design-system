import { Checkbox } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsCheckbox.module.scss';

type OdsCheckboxCheckedState = boolean | 'indeterminate';

interface OdsCheckboxCheckedChangeDetail {
  checked: OdsCheckboxCheckedState,
}

interface OdsCheckboxProp extends ComponentPropsWithRef<'label'> {
  checked?: OdsCheckboxCheckedState;
  defaultChecked?: boolean,
  disabled?: boolean,
  invalid?: boolean,
  name?: string,
  onCheckedChange?: ((details: OdsCheckboxCheckedChangeDetail) => void),
  required?: boolean,
  value?: string,
}

const OdsCheckbox: FC<OdsCheckboxProp> = forwardRef(({
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
    <Checkbox.Root
      checked={ checked }
      className={ classNames(style['ods-checkbox'], className) }
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
    </Checkbox.Root>
  );
});

OdsCheckbox.displayName = 'OdsCheckbox';

export {
  OdsCheckbox,
  type OdsCheckboxCheckedChangeDetail,
  type OdsCheckboxCheckedState,
  type OdsCheckboxProp,
};
