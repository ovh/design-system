import { Popover } from '@ark-ui/react/popover';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface OdsPopoverTriggerProp extends ComponentPropsWithRef<'button'> {
  asChild?: boolean,
}

const OdsPopoverTrigger: FC<OdsPopoverTriggerProp> = forwardRef(({
  children,
  ...props
}, ref): JSX.Element => {
  return (
    <Popover.Trigger
      ref={ ref }
      { ...props }>
      { children }
    </Popover.Trigger>
  );
});

OdsPopoverTrigger.displayName = 'OdsPopoverTrigger';

export {
  OdsPopoverTrigger,
  type OdsPopoverTriggerProp,
};
