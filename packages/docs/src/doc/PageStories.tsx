import { type ReactNode, createContext, useContext } from 'react';
import { useLoaded } from '../nav/loadOnce';
import { type StoriesLoader } from '../nav/model';

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

/* The page's own stories, provided once loaded: suspends the nearest Suspense boundary meanwhile. */
const LoadedPageStories = ({ children, load }: { children: ReactNode, load: StoriesLoader }) => {
  const { module, raw } = useLoaded(load, load);
  return <PageStoriesProvider raw={ raw } storiesModule={ module }>{ children }</PageStoriesProvider>;
};

function usePageStories(): PageStoriesValue {
  return useContext(PageStoriesContext);
}

export { LoadedPageStories, PageStoriesProvider, usePageStories, type StoryModule };
