import { Checkbox } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { FormFieldGroupProvider, useFormField, useFormFieldId } from '../../../../form-field/src';
import styles from './checkboxGroup.module.scss';

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
  className,
  defaultValue,
  disabled,
  invalid,
  name,
  onValueChange,
  readOnly,
  value,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();

  useFormFieldId(null);

  return (
    <Checkbox.Group
      aria-labelledby={ props['aria-label'] ? undefined : fieldContext?.labelId }
      className={ classNames(styles['checkbox-group'], className) }
      data-ods="checkbox-group"
      defaultValue={ defaultValue }
      disabled={ disabled }
      invalid={ invalid }
      name={ name }
      onValueChange={ onValueChange }
      readOnly={ readOnly }
      ref={ ref }
      value={ value }
      { ...props }>
      <FormFieldGroupProvider>
        { children }
      </FormFieldGroupProvider>
    </Checkbox.Group>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';

export {
  CheckboxGroup,
  type CheckboxGroupProp,
};
