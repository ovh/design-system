import { type TileProp, Tile as TileRoot } from './components/tile/Tile';
import { TileAltContainer, type TileAltContainerProp } from './components/tile-alt-container/TileAltContainer';

const Tile = Object.assign(TileRoot, {
  AltContainer: TileAltContainer,
});

export { Tile };
export { TileAltContainer };
export type { TileProp, TileAltContainerProp };
