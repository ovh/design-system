import { composeStories } from '@storybook/react';
import { type ComponentType } from 'react';
import { EXCLUDED_STORIES } from './extractSource';

interface ComposedDemo {
  Component: ComponentType;
  name: string;
}

/* Turns a public CSF module (packages/storybook/stories/**) into renderable
   demos, using Storybook's official portable-stories API — no Storybook
   runtime involved. Layout-only stories used by the old docs stay out of the
   demo list — the shared EXCLUDED_STORIES, also honored by the llms emit. */

function composeModule(storiesModule: Record<string, unknown>): ComposedDemo[] {
  const composed = composeStories(storiesModule as Parameters<typeof composeStories>[0]) as Record<string, ComponentType>;

  return Object.entries(composed)
    .filter(([name]) => !EXCLUDED_STORIES.has(name))
    .map(([name, Component]) => ({ Component, name }));
}

export { composeModule, type ComposedDemo };
