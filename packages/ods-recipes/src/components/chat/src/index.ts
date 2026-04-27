import { Chat as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Chat',
  reactTag: 'Chat',
  tags: [
    SEARCH_TAG.ai,
    SEARCH_TAG.interactive,
  ],
};

const Chat: ComponentRecipe = {
  CssModule,
  Tailwind: () => null,
  metadata,
};

export {
  Chat,
};
