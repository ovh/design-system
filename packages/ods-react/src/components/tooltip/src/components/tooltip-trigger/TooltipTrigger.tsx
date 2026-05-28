import { Tooltip } from '@ark-ui/react/tooltip';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactElement, forwardRef, useEffect, useMemo } from 'react';
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
  id,
  ...props
}, ref): JSX.Element => {
  const { setTriggerId } = useTooltip();

  const childId = useMemo(() => {
    if (children && (children as ReactElement).props?.id) {
      return (children as ReactElement).props.id as string;
    }
    return undefined;
  }, [(children as ReactElement)?.props?.id]);

  useEffect(() => {
    if (!asChild && id) {
      setTriggerId(id);
      return;
    }

    if (childId) {
      setTriggerId(childId);
    }
  }, [asChild, childId, id, setTriggerId]);

  return (
    <Tooltip.Trigger
      asChild={ asChild }
      className={ classNames(style['tooltip-trigger'], className) }
      data-ods="tooltip-trigger"
      id={ id }
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
