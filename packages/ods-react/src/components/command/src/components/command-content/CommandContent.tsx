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
  const { highlightFirst, highlightLast, highlightNext, highlightPrevious, highlightedValue, open, selectHighlighted } = useCommand();

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
      case 'End':
        e.preventDefault();
        highlightLast();
        break;
      case 'Enter':
        if (highlightedValue) {
          e.preventDefault();
          selectHighlighted();
        }
        break;
      case 'Home':
        e.preventDefault();
        highlightFirst();
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
      onKeyDown={ handleKeyDown }
      ref={ nodeRef }
      { ...props }
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
