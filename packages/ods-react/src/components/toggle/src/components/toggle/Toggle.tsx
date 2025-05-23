import { Switch as VendorToggle } from '@ark-ui/react/switch';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ToggleLabels } from '../toggleLabels/ToggleLabels';
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
  onCheckedChange,
  withLabels,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorToggle.Root
      checked={ checked }
      className={ classNames(
        style[ 'toggle' ],
      ) }
      defaultChecked={ defaultChecked }
      onCheckedChange={ onCheckedChange }
      { ...props }
      ref={ ref }>
      <VendorToggle.Control className={
        classNames(
          style[ 'toggle__control' ],
          className,
        ) }>
        <VendorToggle.Thumb className={ style[ 'toggle__control__thumb' ] } />
        {
          withLabels && <ToggleLabels />
        }
      </VendorToggle.Control>
      <VendorToggle.HiddenInput />
    </VendorToggle.Root>
  );
});

Toggle.displayName = 'Toggle';

export {
  Toggle,
  type ToggleProp,
  type ToggleCheckedChangeDetail,
};
