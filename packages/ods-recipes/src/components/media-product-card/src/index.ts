import { MediaProductCard as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Media Product Card',
  reactTag: 'MediaProductCard',
  tags: [
    SEARCH_TAG.product,
    SEARCH_TAG.presentation,
  ],
};

const MediaProductCard: ComponentRecipe = {
  CssModule,
  Tailwind: () => null,
  metadata,
};

export {
  MediaProductCard,
};
