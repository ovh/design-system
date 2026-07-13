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
  const text = getChildrenText(children);
  const isVisible = !filter || text.toLowerCase().includes(filter.toLowerCase());

  useImperativeHandle(ref, () => nodeRef.current!, []);

  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    if (isDisabled) {
      return;
    }
    registerHandler(itemId, () => onSelectRef.current?.());
    return (): void => unregisterHandler(itemId);
  }, [isDisabled, itemId, registerHandler, unregisterHandler]);

  // Not keyed on the filter: the item stays registered while filtered out
  // (the provider derives visibility from the registered text), so typing
  // never rebuilds the registry. Re-runs only refresh the stored
  // node/text/disabled state, which is a no-op for the provider state when
  // nothing changed. Disabled options register too, so the empty state can
  // account for them; the provider excludes them from keyboard navigation.
  useEffect(() => {
    if (!isVisible) {
      return;
    }
    registerItem(itemId, nodeRef.current, text, isDisabled);
  }, [isDisabled, isVisible, itemId, registerItem, text]);

  useEffect(() => {
    return (): void => unregisterItem(itemId);
  }, [itemId, unregisterItem]);

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
      onPointerEnter={ (e) => {
        if (!isDisabled) {
          highlightItem(itemId);
        }
        props.onPointerEnter?.(e);
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
