import { Popover } from '@ark-ui/react/popover';
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

export {
  OdsPopoverTrigger,
  type OdsPopoverTriggerProp,
};
