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
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  name?: string;
  onCheckedChange?: (detail: ToggleCheckedChangeDetail) => void,
  required?: boolean;
  value?: string;
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

      <VendorToggle.HiddenInput aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy } />
    </VendorToggle.Root>
  );
});

Toggle.displayName = 'Toggle';

export {
  Toggle,
  type ToggleProp,
  type ToggleCheckedChangeDetail,
};
