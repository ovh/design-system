import { Tooltip } from '@ark-ui/react/tooltip';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface TooltipTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: boolean,
}

const TooltipTrigger: FC<TooltipTriggerProp> = forwardRef(({
  children,
  ...props
}, ref): JSX.Element => {
  return (
    <Tooltip.Trigger
      ref={ ref }
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
