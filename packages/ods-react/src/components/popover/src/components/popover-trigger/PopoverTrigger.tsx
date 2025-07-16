import { Popover } from '@ark-ui/react/popover';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './popoverTrigger.module.scss';

interface PopoverTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: boolean,
}

const PopoverTrigger: FC<PopoverTriggerProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Popover.Trigger
      className={ classNames(style['popover-trigger'], className) }
      ref={ ref }
      role="button"
      tabIndex={0}
      { ...props }>
      { children }
    </Popover.Trigger>
  );
});

PopoverTrigger.displayName = 'PopoverTrigger';

export {
  PopoverTrigger,
  type PopoverTriggerProp,
};
