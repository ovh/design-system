import { DummyExample as CssModule } from './css-modules';
import { DummyExample as Tailwind } from './tailwind';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Dummy Example',
  reactTag: 'DummyExample',
  tags: [
    SEARCH_TAG.tile,
  ],
};

const DummyExample: ComponentRecipe = {
  CssModule,
  Tailwind,
  metadata,
};

export {
  DummyExample,
};
