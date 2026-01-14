import { DashboardBox as CssModule } from "./css-modules";
import { DashboardBox as Tailwind } from "./tailwind";
import { type ComponentMetadata, type ComponentRecipe } from "../../../constants/recipe";
import { SEARCH_TAG } from "../../../constants/search-tag";

const metadata: ComponentMetadata = {
  name: "Dashboard Box",
  reactTag: "DashboardBox",
  tags: [SEARCH_TAG.presentation],
};

const DashboardBox: ComponentRecipe = {
  CssModule,
  Tailwind,
  metadata,
};

export { DashboardBox };
