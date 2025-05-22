import { ToggleGroup } from '@ark-ui/react/toggle-group';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './switchItem.module.scss';

interface SwitchItemProp extends ComponentPropsWithRef<'button'> {
  value: string,
}

const SwitchItem: FC<SwitchItemProp> = forwardRef(({
  children,
  className,
  defaultValue,
  ...props
}, ref): JSX.Element => {
  return (
    <ToggleGroup.Item
      className={ classNames(style['switch-item'], className) }
      ref={ ref }
      { ...props }>
      { children }
    </ToggleGroup.Item>
  );
});

SwitchItem.displayName = 'SwitchItem';

export {
  SwitchItem,
  type SwitchItemProp,
};
