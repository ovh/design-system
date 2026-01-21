import { type TileProp, Tile as TileRoot } from './components/tile/Tile';
import { TileAltContainer, type TileAltContainerProp } from './components/tile-alt-container/TileAltContainer';

const Tile = {
  AltContainer: TileAltContainer,
  Root: TileRoot,
};

export { Tile };
export type { TileProp, TileAltContainerProp };
