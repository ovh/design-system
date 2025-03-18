import { Popover } from 'radix-ui';
import { type ComponentPropsWithRef, type FC, forwardRef, useMemo } from 'react';
import { ODS_POPOVER_POSITION, type OdsPopoverPosition } from '../../constants/popover-position';
// import { ODS_POPOVER_STRATEGY, type OdsPopoverStrategy } from '../../constants/popover-strategy';
import style from './odsPopoverContent.module.scss';

interface OdsPopoverContentProp extends ComponentPropsWithRef<'div'> {
  position?: OdsPopoverPosition,
  // strategy?: OdsPopoverStrategy,
  withArrow?: boolean,
}

const OdsPopoverContent: FC<OdsPopoverContentProp> = forwardRef(({
  children,
  position = ODS_POPOVER_POSITION.top,
  // strategy = ODS_POPOVER_STRATEGY.absolute,
  withArrow = false,
  ...props
}, ref) => {
  const { align, side } = useMemo(() => {
    const split = position.split('-');
    // TODO fix type
    return {
      align: split[1] as any || 'center',
      side: split[0] as any,
    };
  }, [position]);

  return (
    <Popover.Portal>
      <Popover.Content
        align={ align }
        className={ style['ods-popover-content'] }
        ref={ ref }
        side={ side }
        sideOffset={ 8 }
        { ...props }>
        {
          withArrow &&
          <Popover.Arrow className={ style['ods-popover-content__arrow'] } />
        }

        { children }
      </Popover.Content>
    </Popover.Portal>
  );
});

export {
  OdsPopoverContent,
  type OdsPopoverContentProp,
};
