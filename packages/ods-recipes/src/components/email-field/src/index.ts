import { EmailField as CssModule } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Email Field',
  reactTag: 'EmailField',
  tags: [
    SEARCH_TAG.form,
    SEARCH_TAG.interactive,
  ],
};

const EmailField: ComponentRecipe = {
  CssModule,
  Tailwind: () => null,
  metadata,
};

export {
  EmailField,
};
