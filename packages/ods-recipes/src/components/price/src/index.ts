import { Price as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Price',
  reactTag: 'Price',
  tags: [
    SEARCH_TAG.presentation,
  ],
};

const Price: ComponentRecipe = {
  CssModule,
  metadata,
};

export {
  Price,
};
