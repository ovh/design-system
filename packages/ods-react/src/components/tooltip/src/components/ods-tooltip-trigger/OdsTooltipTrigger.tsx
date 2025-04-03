import { Tooltip } from '@ark-ui/react/tooltip';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface OdsTooltipTriggerProp extends ComponentPropsWithRef<'button'> {
  asChild?: boolean,
}

const OdsTooltipTrigger: FC<OdsTooltipTriggerProp> = forwardRef(({
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

OdsTooltipTrigger.displayName = 'OdsTooltipTrigger';

export {
  OdsTooltipTrigger,
  type OdsTooltipTriggerProp,
};
