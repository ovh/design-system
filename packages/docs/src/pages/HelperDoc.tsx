import { MDXProvider } from '@mdx-js/react';
import { Suspense, useEffect } from 'react';
import { DocArticle } from '../doc/DocArticle';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { DocSkeleton } from '../doc/DocSkeleton';
import { LoadedPageStories } from '../doc/PageStories';
import { lazyOnce, loadOnce } from '../nav/loadOnce';
import { type NavPage } from '../nav/model';

/* Utility function page (formatPrice…): neutral MDX with a HelperSpecification
   table and Canvas demos from the helper's own stories — so the page carries a
   single storiesModule/raw like a component page. */

const HELPER_MODULES = import.meta.glob('../content/helpers/*.mdx');

const HelperDoc = ({ page }: { page: NavPage }) => {
  const key = page.id.replace('helpers/', '');
  const loader = HELPER_MODULES[`../content/helpers/${key}.mdx`];
  const Doc = loader ? lazyOnce(loader, loader) : null;

  // React lazy() only fetches on first render, and the MDX render is gated on
  // the stories chunk: warm the chunk now so both loads run in parallel
  // (lazyOnce reuses the in-flight request).
  useEffect(() => {
    if (loader) {
      loadOnce(loader, loader);
    }
  }, [loader]);

  if (!Doc) {
    return null;
  }
  const content = (
    <MDXProvider components={ MDX_COMPONENTS }>
      <Doc />
    </MDXProvider>
  );
  return (
    <DocArticle>
      <Suspense fallback={ <DocSkeleton variant="helper" /> }>
        { page.stories ? <LoadedPageStories load={ page.stories }>{ content }</LoadedPageStories> : content }
      </Suspense>
    </DocArticle>
  );
};

/* What the first render of a helper page reads, loaded: the page hydrates it without suspending (main.tsx). */
const preloadHelperDoc = (page: NavPage): Promise<unknown> => {
  const loader = HELPER_MODULES[`../content/helpers/${page.id.replace('helpers/', '')}.mdx`];
  return Promise.all([
    loader ? loadOnce(loader, loader) : undefined,
    page.stories ? loadOnce(page.stories, page.stories) : undefined,
  ]);
};

export { HelperDoc, preloadHelperDoc };
