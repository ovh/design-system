import { StatusMessage as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Status Message',
  reactTag: 'StatusMessage',
  tags: [
    SEARCH_TAG.interactive,
    SEARCH_TAG.status,
  ],
};

const StatusMessage: ComponentRecipe = {
  CssModule,
  metadata,
};

export {
  StatusMessage,
};
