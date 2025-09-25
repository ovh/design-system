import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useId, useMemo } from 'react';
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
  const { setContentId } = usePopover();
  const computedId = useMemo(() => id ?? defaultId, [defaultId, id]);

  useEffect(() => {
    setContentId(computedId);
  }, [computedId, setContentId]);

  return (
    <Portal disabled={ !createPortal }>
      <Popover.Positioner>
        <Popover.Content
          className={ classNames(style['popover-content'], className) }
          data-ods="popover-content"
          ref={ ref }
          { ...props }>
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
