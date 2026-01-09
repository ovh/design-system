import { FeatureListProductCard as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Feature List Product Card',
  reactTag: 'FeatureListProductCard',
  tags: [
    SEARCH_TAG.cart,
    SEARCH_TAG.interactive,
    SEARCH_TAG.presentation,
    SEARCH_TAG.product,
  ],
};

const FeatureListProductCard: ComponentRecipe = {
  CssModule,
  Tailwind: () => null,
  metadata,
};

export {
  FeatureListProductCard,
};
