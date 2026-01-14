import type { ComponentMetadata, ComponentRecipe } from '../../../constants/recipe';
import { DashboardBox as CssModule } from './css-modules';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Dashboard Box',
  reactTag: 'DashboardBox',
  tags: [SEARCH_TAG.presentation],
};

const DashboardBox: ComponentRecipe = {
  CssModule,
  Tailwind: () => null,
  metadata,
};

export { DashboardBox };
