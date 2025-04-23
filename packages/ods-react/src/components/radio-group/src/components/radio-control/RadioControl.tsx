import { RadioGroup } from '@ark-ui/react/radio-group';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './radioControl.module.scss';

interface RadioControlProp extends ComponentPropsWithRef<'div'> {}

const RadioControl: FC<RadioControlProp> = forwardRef(({
  children,
  ...props
}, ref): JSX.Element => {
  return (
    <RadioGroup.ItemControl
      className={ style['radio-control'] }
      ref={ ref }
      { ...props }>
      { children }
    </RadioGroup.ItemControl>
  );
});

RadioControl.displayName = 'RadioControl';

export {
  RadioControl,
  type RadioControlProp,
};
