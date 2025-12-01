import { ToggleGroup, useToggleGroupContext } from '@ark-ui/react/toggle-group';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_COLOR, BUTTON_VARIANT, Button } from '../../../../button/src';
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
        color={ BUTTON_COLOR.primary }
        size={ size }
        variant={ selection.indexOf(value) > -1 ? BUTTON_VARIANT.default : BUTTON_VARIANT.outline }>
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
