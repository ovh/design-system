import { Tooltip } from '@ark-ui/react/tooltip';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactElement, forwardRef, useEffect } from 'react';
import { useTooltip } from '../../contexts/useTooltip';
import style from './tooltipTrigger.module.scss';

interface TooltipTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   * Be careful to pass an actual Node, not a Fragment.
   */
  asChild?: boolean,
}

const TooltipTrigger: FC<TooltipTriggerProp> = forwardRef(({
  asChild,
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { setTriggerId } = useTooltip();

  useEffect(() => {
    if (!asChild && props.id) {
      setTriggerId(props.id);
      return;
    }

    if (children && (children as ReactElement).props?.id) {
      setTriggerId((children as ReactElement).props.id);
    }
  }, [asChild, children, props, setTriggerId]);

  return (
    <Tooltip.Trigger
      asChild={ asChild }
      className={ classNames(style['tooltip-trigger'], className) }
      data-ods="tooltip-trigger"
      ref={ ref }
      role="button"
      tabIndex={ 0 }
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
