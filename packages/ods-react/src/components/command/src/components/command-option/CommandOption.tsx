import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef, isValidElement, useEffect, useId, useImperativeHandle, useRef } from 'react';
import { useCommand } from '../../contexts/useCommand';
import style from './commandOption.module.scss';

function getChildrenText(children: ReactNode): string {
  if (Array.isArray(children)) {
    return children.map(getChildrenText).join('');
  }
  if (isValidElement(children)) {
    return getChildrenText((children.props as { children?: ReactNode }).children);
  }
  if (children == null || typeof children === 'boolean') {
    return '';
  }
  return String(children);
}

interface CommandOptionProp extends ComponentPropsWithRef<'div'> {
  /**
   * Called when the option is selected via click or Enter.
   */
  onSelect?: () => void;
}

const CommandOption: FC<CommandOptionProp> = forwardRef(({
  children,
  className,
  onSelect,
  ...props
}, ref): JSX.Element | null => {
  const { filter, highlightItem, highlightedValue, registerHandler, registerItem, unregisterHandler, unregisterItem } = useCommand();
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const id = useId();
  const itemId = props?.id || id;
  const isDisabled = props['aria-disabled'] === true || props['aria-disabled'] === 'true';

  const isHighlighted = highlightedValue === itemId;
  const isVisible = !filter || getChildrenText(children).toLowerCase().includes(filter.toLowerCase());

  useImperativeHandle(ref, () => nodeRef.current!, []);

  useEffect(() => {
    if (!onSelect || !isVisible || isDisabled) {
      return;
    }
    registerHandler(itemId, onSelect);
    return () => unregisterHandler(itemId);
  }, [isDisabled, itemId, onSelect, isVisible, registerHandler, unregisterHandler]);

  useEffect(() => {
    if (!isVisible || isDisabled || !nodeRef.current) {
      return;
    }
    registerItem(itemId, nodeRef.current);
    return () => unregisterItem(itemId);
  }, [isDisabled, isVisible, itemId, registerItem, unregisterItem]);

  useEffect(() => {
    if (isHighlighted) {
      nodeRef.current?.scrollIntoView({ block: 'nearest' });
    }
  }, [isHighlighted]);

  if (!isVisible) {
    return null;
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
    <div
      { ...props }
      aria-selected={ isHighlighted }
      className={ classNames(style['command-option'], isHighlighted && style['command-option--highlighted'], className) }
      data-ods="command-option"
      id={ itemId }
      onClick={ (e) => {
        if (!isDisabled) {
          onSelect?.();
        }
        props.onClick?.(e);
      } }
      onPointerEnter={ () => {
        if (!isDisabled) {
          highlightItem(itemId);
        }
      } }
      ref={ nodeRef }
      role="option">
      { children }
    </div>
  );
});

CommandOption.displayName = 'CommandOption';

export {
  CommandOption,
  type CommandOptionProp,
};
