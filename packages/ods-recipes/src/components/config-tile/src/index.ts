import { ConfigTile as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Config Tile',
  reactTag: 'ConfigTile',
  tags: [
    SEARCH_TAG.interactive,
  ],
};

const ConfigTile: ComponentRecipe = {
  CssModule,
  Tailwind: () => null,
  metadata,
};

export {
  ConfigTile,
};
