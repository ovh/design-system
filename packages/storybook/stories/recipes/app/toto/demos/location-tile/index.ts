import { createDemoWithVariants } from '../../../../../../src/helpers/createDemo';
import CssModules from './css-modules';
// import Tailwind from './tailwind';
console.log('HERE')
console.log(import.meta)
//export const DemoAccordionHero = createDemoWithVariants(import.meta.url, { CssModules, Tailwind });
//export const RecipeLocationTile = createDemoWithVariants('file://Users/dpellier/workspace_ods/design-system/packages/ods-recipes/src/components/location-tile/src/css-modules/index.tsx', { CssModules });
export const RecipeLocationTile = createDemoWithVariants('file://./css-modules/index.tsx', { CssModules });
