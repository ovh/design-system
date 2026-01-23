import { Popover, usePopoverContext } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useId, useImperativeHandle, useMemo, useRef } from 'react';
import { type PopoverPosition } from '../../constants/popover-position';
import { usePopover } from '../../contexts/usePopover';
import style from './popoverContent.module.scss';

interface PopoverContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean,
  /**
   * Whether the component displays an arrow pointing to the trigger.
   */
  withArrow?: boolean,
}

const PopoverContent: FC<PopoverContentProp> = forwardRef(({
  children,
  className,
  createPortal = true,
  id,
  withArrow = false,
  ...props
}, ref): JSX.Element => {
  const defaultId = useId();
  const { onPositionChange, positionerStyle, setContentId } = usePopover();
  const { open } = usePopoverContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const computedId = useMemo(() => id ?? defaultId, [defaultId, id]);

  useImperativeHandle(ref, () => contentRef.current!, [contentRef]);

  useEffect(() => {
    setContentId(computedId);
  }, [computedId, setContentId]);

  useEffect(() => {
    if (contentRef.current) {
      const observer = new MutationObserver((mutations) => {
        if (mutations.length) {
          const dataset = (mutations[0].target as HTMLDivElement).dataset;
          onPositionChange?.({ position: dataset.placement as PopoverPosition });
        }
      });

      observer.observe(contentRef.current, {
        attributeFilter: ['data-placement'],
        attributes: true,
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [contentRef, onPositionChange]);

  return (
    <Portal disabled={ !createPortal }>
      <Popover.Positioner style={{
        zIndex: 'var(--ods-theme-overlay-z-index)',
        ...(positionerStyle || {}),
      }}>
        <Popover.Content
          className={ classNames(style['popover-content'], className) }
          data-ods="popover-content"
          ref={ contentRef }
          { ...props }
          style={{
            ...props.style,
            ...(!open ? { display: 'none' } : {}),
          }}>
          {
            withArrow &&
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
          }

          { children }
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  );
});

PopoverContent.displayName = 'PopoverContent';

export {
  PopoverContent,
  type PopoverContentProp,
};
