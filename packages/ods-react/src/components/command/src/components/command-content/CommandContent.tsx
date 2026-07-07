import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEvent, forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react';
import { ModalBody, ModalContent } from '../../../../modal/src';
import { useCommand } from '../../contexts/useCommand';
import style from './commandContent.module.scss';

interface CommandContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean;
}

const CommandContent: FC<CommandContentProp> = forwardRef(({
  children,
  className,
  createPortal,
  ...props
}, ref): JSX.Element => {
  const { highlightNext, highlightPrevious, highlightedValue, open, selectHighlighted } = useCommand();

  // Home/End are deliberately not intercepted: the APG combobox pattern
  // reserves them for moving the caret within the input.
  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>): void {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        highlightNext();
        break;
      case 'ArrowUp':
        e.preventDefault();
        highlightPrevious();
        break;
      case 'Enter':
        if (highlightedValue) {
          e.preventDefault();
          selectHighlighted();
        }
        break;
      default:
        break;
    }
  }
  const nodeRef = useRef<HTMLDivElement | null>(null);
  useImperativeHandle(ref, () => nodeRef.current!, []);

  useLayoutEffect(() => {
    if (!open || !nodeRef.current) {
      return;
    }

    const el = nodeRef.current;

    function measure(): void {
      requestAnimationFrame(() => {
        el.style.setProperty('--default-height', `${el.offsetHeight}px`);
      });
    }

    if (getComputedStyle(el).animationName === 'none') {
      measure();
      return;
    }

    el.addEventListener('animationend', measure, { once: true });
    return () => el.removeEventListener('animationend', measure);
  }, [open, nodeRef]);

  return (
    <ModalContent
      className={ classNames(style['command-content'], className) }
      createPortal={ createPortal }
      data-ods="command-content"
      dismissible={ false }
      ref={ nodeRef }
      { ...props }
      // chained after the spread so a consumer handler observes key events
      // but can never replace the built-in keyboard navigation
      onKeyDown={ (e) => {
        handleKeyDown(e);
        props.onKeyDown?.(e);
      } }
      color={ undefined } // Color is no longer used and will be removed in the next major version. Setting to undefined to avoid passing deprecated prop to ModalContent.
    >
      <ModalBody className={ classNames(style['command-content__body']) }>
        { children }
      </ModalBody>
    </ModalContent>
  );
});

CommandContent.displayName = 'CommandContent';

export {
  CommandContent,
  type CommandContentProp,
};
