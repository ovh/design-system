import { type ReactNode, createContext, useContext } from 'react';

/* Gives the MDX doc components access to the page's stories (for <Canvas
   story="Name" />) and raw source (for the code blocks) without the MDX
   files importing anything. */

interface PageStoriesValue {
  raw?: string;
  storiesModule?: Record<string, unknown>;
}

const PageStoriesContext = createContext<PageStoriesValue>({});

const PageStoriesProvider = ({ children, raw, storiesModule }: PageStoriesValue & { children: ReactNode }) => (
  <PageStoriesContext.Provider value={{ raw, storiesModule }}>
    { children }
  </PageStoriesContext.Provider>
);

function usePageStories(): PageStoriesValue {
  return useContext(PageStoriesContext);
}

export { PageStoriesProvider, usePageStories };
