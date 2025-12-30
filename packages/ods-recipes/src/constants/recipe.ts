import { type ReactElement } from 'react';
import { type SearchTag } from './search-tag';

enum SOURCE {
  cssModules = 'css-modules',
  readMe = 'README.md',
  tailwind = 'tailwind',
}

type Source = `${SOURCE}`;

const SOURCES = Object.freeze(Object.values(SOURCE));

type ComponentMetadata = {
  name: string,
  reactTag: string,
  tags: Array<SearchTag | string>,
}

type ComponentSource = {
  [SOURCE.cssModules]: Record<string, string>,
  [SOURCE.readMe]: string,
  [SOURCE.tailwind]?: Record<string, string>,
}

type ComponentMetadataWithSources = ComponentMetadata & {
  odsComponents: string[],
  source: ComponentSource,
}

type ComponentRecipe<T = Record<string, never>> = {
  CssModule: (prop: T) => ReactElement,
  Tailwind: (prop: T) => ReactElement | null,
  metadata: ComponentMetadata,
}

export {
  type ComponentMetadata,
  type ComponentMetadataWithSources,
  type ComponentRecipe,
  type ComponentSource,
  SOURCE,
  SOURCES,
  type Source,
};
