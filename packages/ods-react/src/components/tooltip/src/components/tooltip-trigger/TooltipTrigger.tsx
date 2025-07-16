import { Tooltip } from '@ark-ui/react/tooltip';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './tooltipTrigger.module.scss';

interface TooltipTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: boolean,
}

const TooltipTrigger: FC<TooltipTriggerProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Tooltip.Trigger
      className={ classNames(style['tooltip-trigger'], className) }
      ref={ ref }
      role={'button'}
      tabIndex={0}
      { ...props }>
      { children }
    </Tooltip.Trigger>
  );
});

TooltipTrigger.displayName = 'TooltipTrigger';

export {
  TooltipTrigger,
  type TooltipTriggerProp,
};
