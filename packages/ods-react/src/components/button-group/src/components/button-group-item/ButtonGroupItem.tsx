import { ToggleGroup, useToggleGroupContext } from '@ark-ui/react/toggle-group';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_EMPHASIS, BUTTON_STATUS, Button } from '../../../../button/src';
import { useButtonGroup } from '../../contexts/useButtonGroup';
import style from './buttonGroupItem.module.scss';

interface ButtonGroupItemProp extends ComponentPropsWithRef<'button'> {
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;
  /**
   * The value of the item.
   */
  value: string,
}

const ButtonGroupItem: FC<ButtonGroupItemProp> = forwardRef(({
  children,
  className,
  // The HTML color attribute had no effect in v19: keep it from reaching the deprecated color prop of the Button.
  color,
  disabled,
  value,
  ...props
}, ref): JSX.Element => {
  const { value: selection } = useToggleGroupContext();
  const { size } = useButtonGroup();

  return (
    <ToggleGroup.Item
      asChild
      className={ classNames(style['button-group-item'], className) }
      data-ods="button-group-item"
      disabled={ disabled }
      ref={ ref }
      value={ value }
      { ...props }>
      <Button
        emphasis={ selection.indexOf(value) > -1 ? BUTTON_EMPHASIS.high : BUTTON_EMPHASIS.medium }
        size={ size }
        status={ BUTTON_STATUS.brand }>
        { children }
      </Button>
    </ToggleGroup.Item>
  );
});

ButtonGroupItem.displayName = 'ButtonGroupItem';

export {
  ButtonGroupItem,
  type ButtonGroupItemProp,
};
