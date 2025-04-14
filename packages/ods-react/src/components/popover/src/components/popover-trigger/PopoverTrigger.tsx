import { Popover } from '@ark-ui/react/popover';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface PopoverTriggerProp extends ComponentPropsWithRef<'button'> {
  asChild?: boolean,
}

const PopoverTrigger: FC<PopoverTriggerProp> = forwardRef(({
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

PopoverTrigger.displayName = 'PopoverTrigger';

export {
  PopoverTrigger,
  type PopoverTriggerProp,
};
