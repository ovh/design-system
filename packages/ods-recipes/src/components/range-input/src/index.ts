import { RangeInput as CssModule } from './css-modules';
import { RangeInput as Tailwind } from './tailwind';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Range Input',
  reactTag: 'RangeInput',
  tags: [
    SEARCH_TAG.form,
    SEARCH_TAG.interactive,
  ],
};

const RangeInput: ComponentRecipe = {
  CssModule,
  Tailwind,
  metadata,
};

export {
  RangeInput,
};
