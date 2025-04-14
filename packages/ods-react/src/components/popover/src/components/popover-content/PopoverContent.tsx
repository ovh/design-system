import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './popoverContent.module.scss';

interface PopoverContentProp extends ComponentPropsWithRef<'div'> {
  withArrow?: boolean,
}

const PopoverContent: FC<PopoverContentProp> = forwardRef(({
  children,
  className,
  withArrow = false,
  ...props
}, ref): JSX.Element => {
  return (
    <Portal>
      <Popover.Positioner>
        <Popover.Content
          className={ classNames(style['popover-content'], className) }
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
