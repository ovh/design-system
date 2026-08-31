import { type PageStoriesData, type StoriesLoader } from './model';
import { useAsyncValue } from './useAsyncValue';

/* Resolves a page's lazy stories loader (see storiesOf in the nav model) into
   its { module, raw } pair; consumers show their skeleton until the stories
   chunk lands. */
function useStories(loader?: StoriesLoader): PageStoriesData | undefined {
  return useAsyncValue(loader, [loader]);
}

export { useStories };
