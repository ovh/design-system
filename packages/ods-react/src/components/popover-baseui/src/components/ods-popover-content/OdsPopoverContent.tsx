import { Popover } from '@base-ui-components/react/popover';
import { type ComponentPropsWithRef, type FC, forwardRef, useMemo } from 'react';
import { ODS_POPOVER_POSITION, type OdsPopoverPosition } from '../../constants/popover-position';
import { ODS_POPOVER_STRATEGY, type OdsPopoverStrategy } from '../../constants/popover-strategy';
import style from './odsPopoverContent.module.scss';

interface OdsPopoverContentProp extends ComponentPropsWithRef<'div'> {
  position?: OdsPopoverPosition,
  strategy?: OdsPopoverStrategy,
  withArrow?: boolean,
}

const OdsPopoverContent: FC<OdsPopoverContentProp> = forwardRef(({
  children,
  position = ODS_POPOVER_POSITION.top,
  strategy = ODS_POPOVER_STRATEGY.absolute,
  withArrow = false,
  ...props
}, ref) => {
  const { align, side } = useMemo(() => {
    const split = position.split('-');
    // TODO fix type
    return {
      align: split[1] as any || 'center', // eslint-disable-line @typescript-eslint/no-explicit-any
      side: split[0] as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    };
  }, [position]);

  return (
    <Popover.Portal>
      <Popover.Positioner
        align={ align }
        positionMethod={ strategy }
        side={ side }
        sideOffset={ 8 }>
        <Popover.Popup
          className={ style['ods-popover-content'] }
          ref={ ref }
          { ...props }>
          {
            withArrow &&
            <Popover.Arrow className={ style['ods-popover-content__arrow'] }>
              <span className={ style['ods-popover-content__arrow__triangle'] } />
            </Popover.Arrow>
          }

          { children }
        </Popover.Popup>
      </Popover.Positioner>
    </Popover.Portal>
  );
});

OdsPopoverContent.displayName = 'OdsPopoverContent';

export {
  OdsPopoverContent,
  type OdsPopoverContentProp,
};
