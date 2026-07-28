import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, Suspense, lazy, useMemo } from 'react';
import { Skeleton } from '../../../ods-react/src/components/skeleton/src';
import { DocArticle } from '../doc/DocArticle';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { PageStoriesProvider } from '../doc/PageStories';
import { type NavPage } from '../nav/model';

/* Utility function page (formatPrice…): neutral MDX with a HelperSpecification
   table and Canvas demos from the helper's own stories — so the page carries a
   single storiesModule/raw like a component page. */

const HELPER_MODULES = import.meta.glob('../content/helpers/*.mdx');

const HelperDoc = ({ page }: { page: NavPage }) => {
  const key = page.id.replace('helpers/', '');
  const loader = HELPER_MODULES[`../content/helpers/${key}.mdx`];
  const Doc = useMemo(
    () => (loader ? lazy(loader as () => Promise<{ default: ComponentType }>) : null),
    [loader],
  );

  if (!Doc) {
    return null;
  }
  return (
    <PageStoriesProvider raw={ page.raw } storiesModule={ page.storiesModule }>
      <Suspense fallback={ <Skeleton style={{ height: '320px', marginTop: '16px', width: '100%' }} /> }>
        <DocArticle>
          <MDXProvider components={ MDX_COMPONENTS }>
            <Doc />
          </MDXProvider>
        </DocArticle>
      </Suspense>
    </PageStoriesProvider>
  );
};

export { HelperDoc };
