import { StatusModal as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Status Modal',
  reactTag: 'StatusModal',
  tags: [
    SEARCH_TAG.dialog,
    SEARCH_TAG.interactive,
    SEARCH_TAG.status,
  ],
};

const StatusModal: ComponentRecipe = {
  CssModule,
  metadata,
};

export {
  StatusModal,
};
