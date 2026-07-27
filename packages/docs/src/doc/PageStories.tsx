import { type ReactNode, createContext, useContext } from 'react';

/* Gives the MDX doc components access to the page's stories (for <Canvas
   story="Name" />) and raw source (for the code blocks) without the MDX
   files importing anything.

   storyModules holds cross-component stories a guide embeds (<Canvas
   from="button" />) — component pages just use the single storiesModule/raw. */

interface StoryModule {
  module: Record<string, unknown>;
  raw: string;
}

interface PageStoriesValue {
  raw?: string;
  storiesModule?: Record<string, unknown>;
  storyModules?: Record<string, StoryModule>;
}

const PageStoriesContext = createContext<PageStoriesValue>({});

const PageStoriesProvider = ({ children, raw, storiesModule, storyModules }: PageStoriesValue & { children: ReactNode }) => (
  <PageStoriesContext.Provider value={{ raw, storiesModule, storyModules }}>
    { children }
  </PageStoriesContext.Provider>
);

function usePageStories(): PageStoriesValue {
  return useContext(PageStoriesContext);
}

export { PageStoriesProvider, usePageStories, type StoryModule };
