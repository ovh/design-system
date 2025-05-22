import { Switch as VendorToggle } from '@ark-ui/react/switch';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './toggle.module.scss';

interface ToggleChangeDetail {
  checked: boolean,
}

interface ToggleProp extends ComponentPropsWithRef<'label'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  name?: string;
  onCheckedChange?: (detail: ToggleChangeDetail) => void,
  required?: boolean;
  value?: string;
  withLabel?: boolean;
}

const Toggle: FC<ToggleProp> = forwardRef(({
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  withLabel,
  ...props
}, ref): JSX.Element => {
  const OnLabel = 'ON';
  const OffLabel = 'OFF';

  return (
    <VendorToggle.Root
      checked={ checked }
      className={ classNames(
        style['toggle'],
      ) }
      defaultChecked={ defaultChecked }
      onCheckedChange={ onCheckedChange }
      { ...props }>
      <VendorToggle.Control className={
        classNames(
          style['toggle__control'],
          className,
        ) } ref={ ref }>
        <VendorToggle.Thumb />
        {
          withLabel && <div className={ style['toggle__labels'] }>
            <span className={ style['toggle__labels-on'] }>{ OnLabel }</span>
            <span className={ style['toggle__labels-off'] }>{ OffLabel }</span>
          </div>
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
  type ToggleChangeDetail,
};
