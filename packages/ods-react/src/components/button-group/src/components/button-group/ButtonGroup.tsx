import { ToggleGroup } from '@ark-ui/react/toggle-group';
import classNames from 'classnames';
import { type FC, type JSX, forwardRef } from 'react';
import { ButtonGroupProvider, type ButtonGroupRootProp } from '../../contexts/useButtonGroup';
import style from './buttonGroup.module.scss';

interface ButtonGroupProp extends ButtonGroupRootProp {}

const ButtonGroup: FC<ButtonGroupProp> = forwardRef(({
  children,
  className,
  defaultValue,
  disabled,
  multiple,
  onValueChange,
  size,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <ButtonGroupProvider size={ size }>
      <ToggleGroup.Root
        className={ classNames(style['button-group'], className) }
        data-ods="button-group"
        defaultValue={ defaultValue }
        disabled={ disabled }
        multiple={ multiple }
        onValueChange={ onValueChange }
        ref={ ref }
        value={ value }
        { ...props }>
        { children }
      </ToggleGroup.Root>
    </ButtonGroupProvider>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export {
  ButtonGroup,
  type ButtonGroupProp,
};
