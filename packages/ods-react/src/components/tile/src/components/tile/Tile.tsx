import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { CARD_COLOR, Card } from '../../../../card/src';
import { TileProvider } from '../../contexts/useTile';
import style from './tile.module.scss';

interface TileProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the component is selected.
   */
  selected?: boolean,
}

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
        data-ods="tile"
        ref={ ref }
        { ...props }
        color={ CARD_COLOR.neutral }
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
