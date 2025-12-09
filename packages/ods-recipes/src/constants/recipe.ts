import { type ReactElement } from 'react';
import { type SearchTag } from './search-tag';

type ComponentMetadata = {
  additionalNote?: string,
  description: string,
  name: string,
  reactTag: string,
  tags: Array<SearchTag | string>,
}

type ComponentMetadataWithSources = ComponentMetadata & {
  source: {
    'css-modules': {
      css?: string,
      ts: string,
    },
    tailwind: {
      ts: string,
    },
  },
}

type ComponentRecipe = {
  CssModule: () => ReactElement,
  Tailwind: () => ReactElement,
  metadata: ComponentMetadata,
}

export {
  type ComponentMetadata,
  type ComponentMetadataWithSources,
  type ComponentRecipe,
};
