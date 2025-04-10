import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsPopoverContent.module.scss';

interface OdsPopoverContentProp extends ComponentPropsWithRef<'div'> {
  withArrow?: boolean,
}

const OdsPopoverContent: FC<OdsPopoverContentProp> = forwardRef(({
  children,
  className,
  withArrow = false,
  ...props
}, ref): JSX.Element => {
  return (
    <Portal>
      <Popover.Positioner>
        <Popover.Content
          className={ classNames(style['ods-popover-content'], className) }
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

OdsPopoverContent.displayName = 'OdsPopoverContent';

export {
  OdsPopoverContent,
  type OdsPopoverContentProp,
};
