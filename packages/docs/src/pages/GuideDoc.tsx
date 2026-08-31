import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, Suspense, lazy, useEffect, useMemo } from 'react';
import { DocArticle } from '../doc/DocArticle';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { DocSkeleton } from '../doc/DocSkeleton';
import { PageStoriesProvider, type StoryModule } from '../doc/PageStories';
import { GUIDE_STORY_MODULES } from '../content/guides/storyModules';
import { type NavPage } from '../nav/model';
import { useAsyncValue } from '../nav/useAsyncValue';

/* Static page = one neutral-format MDX rendered through the provider. A guide
   MAY embed component demos (<Canvas from="button" />); those modules come
   from GUIDE_STORY_MODULES, keyed by guide id, and load lazily alongside the
   MDX chunk. */

const GUIDE_MODULES = import.meta.glob('../content/guides/*.mdx');

const GuideDoc = ({ page }: { page: NavPage }) => {
  const key = page.id.replace('guides/', '');
  const loader = GUIDE_MODULES[`../content/guides/${key}.mdx`];
  const Doc = useMemo(
    () => (loader ? lazy(loader as () => Promise<{ default: ComponentType }>) : null),
    [loader],
  );

  // React lazy() only fetches on first render, and the MDX render is gated on
  // the story modules below: warm the chunk now so both loads run in parallel
  // (dynamic imports are cached, lazy() reuses the in-flight request).
  useEffect(() => {
    loader?.();
  }, [loader]);

  // Resolve every embedded story module before rendering the MDX, so a
  // <Canvas from="…" /> never sees a half-loaded set. GUIDE_STORY_MODULES
  // entries are module-level constants, so the load stays stable per guide.
  const loaders = GUIDE_STORY_MODULES[key];
  const loadStories = useMemo(
    () => loaders && (async () => {
      const entries = await Promise.all(Object.entries(loaders).map(async ([component, load]) => [component, await load?.()] as const));
      return Object.fromEntries(entries.filter(([, value]) => value)) as Record<string, StoryModule>;
    }),
    [loaders],
  );
  const storyModules = useAsyncValue(loadStories, [loadStories]);

  if (!Doc) {
    return null;
  }
  return (
    <PageStoriesProvider storyModules={ storyModules }>
      { loaders && !storyModules
        ? <DocSkeleton />
        : (
          <Suspense fallback={ <DocSkeleton /> }>
            <DocArticle>
              <MDXProvider components={ MDX_COMPONENTS }>
                <Doc />
              </MDXProvider>
            </DocArticle>
          </Suspense>
        ) }
    </PageStoriesProvider>
  );
};

export { GuideDoc };
