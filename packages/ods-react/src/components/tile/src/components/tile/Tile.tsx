import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { CARD_COLOR, Card } from '../../../../card/src';
import { TileProvider, type TileRootProp } from '../../contexts/useTile';
import style from './tile.module.scss';

interface TileProp extends Omit<ComponentPropsWithRef<'div'>, 'color'>, TileRootProp {}

const Tile: FC<TileProp> = forwardRef(({
  className,
  children,
  disabled = false,
  selected = false,
  ...props
}, ref): JSX.Element => {
  return (
    <TileProvider disabled={ disabled } selected={ selected }>
      <Card
        className={ classNames(style[ 'tile' ],
          { [ style[ 'tile--selected' ] ]: selected },
          { [ style[ 'tile--disabled' ] ]: disabled },
          className) }
        color={ CARD_COLOR.neutral }
        data-ods="tile"
        ref={ ref }
        { ...props }
      >
        { children }
      </Card>
    </TileProvider>
  );
});

Tile.displayName = 'Tile';

export {
  Tile,
  type TileProp,
};
