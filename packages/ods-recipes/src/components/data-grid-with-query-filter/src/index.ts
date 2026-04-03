import { DataGridWithQueryFilter as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Data Grid With Query Filter',
  reactTag: 'DataGridWithQueryFilter',
  tags: [
    SEARCH_TAG.interactive,
    SEARCH_TAG.presentation,
  ],
};

const DataGridWithQueryFilter: ComponentRecipe = {
  CssModule,
  Tailwind: () => null,
  metadata,
};

export {
  DataGridWithQueryFilter,
};
