import { Popover } from '@base-ui-components/react/popover';
import { type ComponentPropsWithRef, type FC, type HTMLAttributes, type ReactElement, type Ref } from 'react';

// TODO
type GenericHTMLProps = HTMLAttributes<any> & {
    ref?: Ref<any> | undefined;
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

export {
  OdsPopoverTrigger,
  type OdsPopoverTriggerProp,
};
