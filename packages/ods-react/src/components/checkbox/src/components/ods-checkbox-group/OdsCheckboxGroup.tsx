import { Checkbox } from '@ark-ui/react/checkbox';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface OdsCheckboxGroupProp extends ComponentPropsWithRef<'div'> {
  defaultValue?: string[],
  disabled?: boolean,
  invalid?: boolean,
  name?: string,
  onValueChange?: (value: string[]) => void,
  readOnly?: boolean,
  value?: string[],
}

const OdsCheckboxGroup: FC<OdsCheckboxGroupProp> = forwardRef(({
  children,
  defaultValue,
  disabled,
  invalid,
  name,
  onValueChange,
  readOnly,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <Checkbox.Group
      defaultValue={ defaultValue }
      disabled={ disabled }
      invalid={ invalid }
      name={ name }
      onValueChange={ onValueChange }
      readOnly={ readOnly }
      ref={ ref }
      value={ value }
      { ...props }>
      { children }
    </Checkbox.Group>
  );
});

OdsCheckboxGroup.displayName = 'OdsCheckboxGroup';

export {
  OdsCheckboxGroup,
  type OdsCheckboxGroupProp,
};
