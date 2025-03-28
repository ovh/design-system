import { Popover } from 'radix-ui';
import { type ComponentPropsWithRef, type FC } from 'react';

interface OdsPopoverTriggerProp extends ComponentPropsWithRef<'button'> {
  asChild?: boolean,
}

const OdsPopoverTrigger: FC<OdsPopoverTriggerProp> = ({ children, ...props }) => {
  return (
    <Popover.Trigger { ...props }>
      { children }
    </Popover.Trigger>
  );
};

OdsPopoverTrigger.displayName = 'OdsPopoverTrigger';

export {
  OdsPopoverTrigger,
  type OdsPopoverTriggerProp,
};
