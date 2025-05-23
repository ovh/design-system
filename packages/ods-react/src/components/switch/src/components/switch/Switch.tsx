import { ToggleGroup, type ToggleGroupValueChangeDetails } from '@ark-ui/react/toggle-group';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { SWITCH_SIZE, type SwitchSize } from '../../constants/switch-size';
import style from './switch.module.scss';

interface SwitchValueChangeDetail {
  value: string,
}

interface SwitchProp extends ComponentPropsWithRef<'div'> {
  defaultValue?: string,
  disabled?: boolean,
  onValueChange?: (detail: SwitchValueChangeDetail) => void,
  size?: SwitchSize,
  value?: string,
}

const Switch: FC<SwitchProp> = forwardRef(({
  className,
  defaultValue,
  disabled,
  onValueChange,
  size = SWITCH_SIZE.md,
  value,
  ...props
}, ref): JSX.Element => {
  function onSwitchValueChange(detail: ToggleGroupValueChangeDetails): void {
    if (onValueChange) {
      onValueChange({ value: detail.value[0] });
    }
  }

  return (
    <ToggleGroup.Root
      className={ classNames(
        style['switch'],
        style[`switch--${size}`],
        className,
      )}
      { ...props }
      defaultValue={ defaultValue ? [defaultValue] : undefined }
      deselectable={ false }
      disabled={ disabled }
      loopFocus={ false }
      multiple={ false }
      onValueChange={ onSwitchValueChange }
      orientation="horizontal"
      ref={ ref }
      value={ value ? [value] : undefined }>
    </ToggleGroup.Root>
  );
});

Switch.displayName = 'Switch';

export {
  Switch,
  type SwitchProp,
  type SwitchValueChangeDetail,
};
