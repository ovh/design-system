import { FeatureList as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Feature List',
  reactTag: 'FeatureList',
  tags: [
    SEARCH_TAG.presentation,
  ],
};

const FeatureList: ComponentRecipe = {
  CssModule,
  metadata,
};

export {
  FeatureList,
};
