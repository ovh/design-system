import { MDXProvider } from '@mdx-js/react';
import { type ReactNode, Suspense, useEffect } from 'react';
import { DocArticle } from '../doc/DocArticle';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { DocSkeleton } from '../doc/DocSkeleton';
import { PageStoriesProvider, type StoryModule } from '../doc/PageStories';
import { GUIDE_STORY_MODULES } from '../content/guides/storyModules';
import { lazyOnce, loadOnce, useLoaded } from '../nav/loadOnce';
import { type NavPage } from '../nav/model';

/* Static page = one neutral-format MDX rendered through the provider. A guide
   MAY embed component demos (<Canvas from="button" />); those modules come
   from GUIDE_STORY_MODULES, keyed by guide id, and load lazily alongside the
   MDX chunk. */

const GUIDE_MODULES = import.meta.glob('../content/guides/*.mdx');

/* Every embedded story module, resolved before the MDX renders, so a <Canvas from="…" /> never sees
   a half-loaded set. GUIDE_STORY_MODULES entries are module-level constants: the key of the load. */
type StoryLoaders = (typeof GUIDE_STORY_MODULES)[string];

const loadStoryModules = (loaders: StoryLoaders) => async (): Promise<Record<string, StoryModule>> => {
  const entries = await Promise.all(Object.entries(loaders).map(async ([component, load]) => [component, await load?.()] as const));
  return Object.fromEntries(entries.filter(([, value]) => value)) as Record<string, StoryModule>;
};

const GuideStories = ({ children, loaders }: { children: ReactNode, loaders: StoryLoaders }) => {
  const storyModules = useLoaded(loaders, loadStoryModules(loaders));
  return <PageStoriesProvider storyModules={ storyModules }>{ children }</PageStoriesProvider>;
};

const GuideDoc = ({ page }: { page: NavPage }) => {
  const key = page.id.replace('guides/', '');
  const loader = GUIDE_MODULES[`../content/guides/${key}.mdx`];
  const Doc = loader ? lazyOnce(loader, loader) : null;

  // The MDX chunk only loads once its component renders, which is gated on
  // the story modules: warm the chunk now so both loads run in parallel
  // (lazyOnce reuses the in-flight request).
  useEffect(() => {
    if (loader) {
      loadOnce(loader, loader);
    }
  }, [loader]);

  if (!Doc) {
    return null;
  }
  const loaders = GUIDE_STORY_MODULES[key];
  const content = (
    <MDXProvider components={ MDX_COMPONENTS }>
      <Doc />
    </MDXProvider>
  );
  return (
    <DocArticle>
      <Suspense fallback={ <DocSkeleton variant="guide" /> }>
        { loaders ? <GuideStories loaders={ loaders }>{ content }</GuideStories> : content }
      </Suspense>
    </DocArticle>
  );
};

/* What the first render of a guide reads, loaded: the page hydrates it without suspending (main.tsx). */
const preloadGuideDoc = (page: NavPage): Promise<unknown> => {
  const key = page.id.replace('guides/', '');
  const loader = GUIDE_MODULES[`../content/guides/${key}.mdx`];
  const loaders = GUIDE_STORY_MODULES[key];
  return Promise.all([
    loader ? loadOnce(loader, loader) : undefined,
    loaders ? loadOnce(loaders, loadStoryModules(loaders)) : undefined,
  ]);
};

export { GuideDoc, preloadGuideDoc };
