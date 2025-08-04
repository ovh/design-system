import { Popover } from '@ark-ui/react/popover';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactElement, forwardRef, useEffect } from 'react';
import { usePopover } from '../../contexts/usePopover';
import style from './popoverTrigger.module.scss';

interface PopoverTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   * Be careful to pass an actual Node, not a Fragment.
   */
  asChild?: boolean,
}

const PopoverTrigger: FC<PopoverTriggerProp> = forwardRef(({
  asChild,
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { setTriggerId } = usePopover();

  useEffect(() => {
    if (!asChild && props.id) {
      setTriggerId?.(props.id);
      return;
    }

    if (children && (children as ReactElement).props?.id) {
      setTriggerId?.((children as ReactElement).props.id);
    }
  }, [asChild, children, props, setTriggerId]);

  return (
    <Popover.Trigger
      asChild={ asChild }
      className={ classNames(style['popover-trigger'], className) }
      data-ods="popover-trigger"
      ref={ ref }
      role="button"
      tabIndex={ 0 }
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
