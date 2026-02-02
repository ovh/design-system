import { DashboardCard as CssModule } from './css-modules';
import { DashboardCard as Tailwind } from './tailwind';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Dashboard Card',
  reactTag: 'DashboardCard',
  tags: [
    SEARCH_TAG.interactive,
    SEARCH_TAG.presentation,
  ],
};

const DashboardCard: ComponentRecipe = {
  CssModule,
  Tailwind,
  metadata,
};

export {
  DashboardCard,
};
