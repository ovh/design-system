import { Checkbox } from '@ark-ui/react/checkbox';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface CheckboxGroupProp extends ComponentPropsWithRef<'div'> {
  /**
   * The initial value of `value` when uncontrolled.
   */
  defaultValue?: string[],
  /**
   * Whether the group is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the group is in error.
   */
  invalid?: boolean,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the value changes.
   */
  onValueChange?: (value: string[]) => void,
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean,
  /**
   * The controlled value of the checkbox group.
   */
  value?: string[],
}

const CheckboxGroup: FC<CheckboxGroupProp> = forwardRef(({
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

CheckboxGroup.displayName = 'CheckboxGroup';

export {
  CheckboxGroup,
  type CheckboxGroupProp,
};
