import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useTile } from '../../contexts/useTile';
import style from './tileAltContainer.module.scss';

interface TileAltContainerProp extends ComponentPropsWithRef<'div'> {}

const TileAltContainer: FC<TileAltContainerProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const tileContext = useTile();
  const selected = tileContext?.selected ?? false;
  const disabled = tileContext?.disabled ?? false;

  return (
    <div
      className={ classNames(style['tile-alt-container'],
        { [style['tile-alt-container--selected']]: selected },
        { [style['tile-alt-container--disabled']]: disabled },
        className,
      ) }
      data-ods="tile-alt-container"
      ref={ ref }
      { ...props }>
      { children }
    </div>
  );
});

TileAltContainer.displayName = 'TileAltContainer';

export {
  TileAltContainer,
  type TileAltContainerProp,
};
