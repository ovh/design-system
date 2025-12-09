import { LocationTile as CssModule } from './css-modules';
import { LocationTile as Tailwind } from './tailwind';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  additionalNote: '',
  description: 'A tile that offers a location option.',
  name: 'Location Tile',
  reactTag: 'LocationTile',
  tags: [
    SEARCH_TAG.checkbox,
    SEARCH_TAG.location,
    SEARCH_TAG.selection,
    SEARCH_TAG.tile,
  ],
};

const LocationTile: ComponentRecipe = {
  CssModule,
  Tailwind,
  metadata,
};

export {
  LocationTile,
};
