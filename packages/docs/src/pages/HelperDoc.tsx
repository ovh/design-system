import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, Suspense, lazy, useEffect, useMemo } from 'react';
import { DocArticle } from '../doc/DocArticle';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { DocSkeleton } from '../doc/DocSkeleton';
import { PageStoriesProvider } from '../doc/PageStories';
import { type NavPage } from '../nav/model';
import { useStories } from '../nav/useStories';

/* Utility function page (formatPrice…): neutral MDX with a HelperSpecification
   table and Canvas demos from the helper's own stories — so the page carries a
   single storiesModule/raw like a component page. */

const HELPER_MODULES = import.meta.glob('../content/helpers/*.mdx');

const HelperDoc = ({ page }: { page: NavPage }) => {
  const key = page.id.replace('helpers/', '');
  const stories = useStories(page.stories);
  const loader = HELPER_MODULES[`../content/helpers/${key}.mdx`];
  const Doc = useMemo(
    () => (loader ? lazy(loader as () => Promise<{ default: ComponentType }>) : null),
    [loader],
  );

  // React lazy() only fetches on first render, and the MDX render is gated on
  // the stories chunk: warm the chunk now so both loads run in parallel
  // (dynamic imports are cached, lazy() reuses the in-flight request).
  useEffect(() => {
    loader?.();
  }, [loader]);

  if (!Doc) {
    return null;
  }
  return (
    <PageStoriesProvider raw={ stories?.raw } storiesModule={ stories?.module }>
      { stories
        ? (
          <Suspense fallback={ <DocSkeleton /> }>
            <DocArticle>
              <MDXProvider components={ MDX_COMPONENTS }>
                <Doc />
              </MDXProvider>
            </DocArticle>
          </Suspense>
        )
        : <DocSkeleton /> }
    </PageStoriesProvider>
  );
};

export { HelperDoc };
