import { Switch as VendorToggle } from '@ark-ui/react/switch';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { ToggleLabels } from '../toggle-labels/ToggleLabels';
import style from './toggle.module.scss';

interface ToggleCheckedChangeDetail {
  checked: boolean,
}

interface ToggleProp extends ComponentPropsWithRef<'label'> {
  /**
   * The controlled checked state of the toggle.
   */
  checked?: boolean;
  /**
   * The initial checked state of the toggle. Use when you don't need to control the checked state of the toggle.
   */
  defaultChecked?: boolean;
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean;
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string;
  /**
   * Callback fired when the checked state changes.
   */
  onCheckedChange?: (detail: ToggleCheckedChangeDetail) => void,
  /**
   * Whether the component is required.
   */
  required?: boolean;
  /**
   * The value of form element. Useful for form submission.
   */
  value?: string;
  /**
   * Whether the component displays "ON/OFF" labels.
   */
  withLabels?: boolean;
}

const Toggle: FC<ToggleProp> = forwardRef(({
  className,
  checked,
  defaultChecked,
  disabled,
  id,
  invalid,
  name,
  onCheckedChange,
  required,
  value,
  withLabels,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();

  return (
    <VendorToggle.Root
      checked={ checked }
      className={ classNames(style['toggle'] )}
      data-ods="toggle"
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
      <VendorToggle.Control className={ classNames(
        style['toggle__control'],
        className,
      )}>
        <VendorToggle.Thumb className={ style['toggle__control__thumb'] } />

        {
          withLabels && <ToggleLabels />
        }
      </VendorToggle.Control>

      <VendorToggle.HiddenInput
        aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
        aria-labelledby={ props['aria-labelledby'] || (fieldContext?.labelId ?? '') } />
    </VendorToggle.Root>
  );
});

Toggle.displayName = 'Toggle';

export {
  Toggle,
  type ToggleProp,
  type ToggleCheckedChangeDetail,
};
