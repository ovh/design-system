import { Popover } from '@base-ui-components/react/popover';
import { type ComponentPropsWithRef, type FC, type HTMLAttributes, type ReactElement, type Ref } from 'react';

// TODO
type GenericHTMLProps = HTMLAttributes<any> & { // eslint-disable-line @typescript-eslint/no-explicit-any
    ref?: Ref<any> | undefined; // eslint-disable-line @typescript-eslint/no-explicit-any
};
//interface OdsPopoverTriggerProp extends Popover.Trigger.Props {}

interface OdsPopoverTriggerProp extends ComponentPropsWithRef<'button'> {
  render?: ReactElement | ((props: GenericHTMLProps) => ReactElement),
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
