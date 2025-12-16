import { type ReactElement } from 'react';
import { type SearchTag } from './search-tag';

type ComponentMetadata = {
  name: string,
  reactTag: string,
  tags: Array<SearchTag | string>,
}

type ComponentMetadataWithSources = ComponentMetadata & {
  odsComponents: string[],
  source: {
    'css-modules': Record<string, string>,
    'README.md': string,
    tailwind?: Record<string, string>,
  },
}

type ComponentRecipe = {
  CssModule: () => ReactElement,
  Tailwind?: () => ReactElement,
  metadata: ComponentMetadata,
}

export {
  type ComponentMetadata,
  type ComponentMetadataWithSources,
  type ComponentRecipe,
};
