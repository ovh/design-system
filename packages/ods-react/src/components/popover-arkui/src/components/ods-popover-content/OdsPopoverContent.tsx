import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import { type ComponentPropsWithRef, type FC, forwardRef } from 'react';
import style from './odsPopoverContent.module.scss';

interface OdsPopoverContentProp extends ComponentPropsWithRef<'div'> {
  withArrow?: boolean,
}

const OdsPopoverContent: FC<OdsPopoverContentProp> = forwardRef(({
  children,
  withArrow = false,
  ...props
}, ref) => {
  return (
    <Portal>
      <Popover.Positioner>
        <Popover.Content
          className={ style['ods-popover-content'] }
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
