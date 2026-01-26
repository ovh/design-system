import { DataGrid as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Data Grid',
  reactTag: 'DataGrid',
  tags: [
    SEARCH_TAG.interactive,
    SEARCH_TAG.presentation,
  ],
};

const DataGrid: ComponentRecipe = {
  CssModule,
  Tailwind: () => null,
  metadata,
};

export {
  DataGrid,
};
