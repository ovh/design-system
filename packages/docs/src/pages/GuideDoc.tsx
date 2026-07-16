import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, Suspense, lazy, useMemo } from 'react';
import { Skeleton } from '../../../ods-react/src/components/skeleton/src';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { PageStoriesProvider } from '../doc/PageStories';
import { type NavPage } from '../nav/model';

/* Static page = one neutral-format MDX rendered through the provider. A guide
   MAY carry a stories context (the Forms guide embeds form-field demos). */

const GUIDE_MODULES = import.meta.glob('../content/guides/*.mdx');

const GuideDoc = ({ page }: { page: NavPage }) => {
  const docKey = `../content/guides/${page.id.replace('guides/', '')}.mdx`;
  const loader = GUIDE_MODULES[docKey];
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
        <article className="doc">
          <MDXProvider components={ MDX_COMPONENTS }>
            <Doc />
          </MDXProvider>
        </article>
      </Suspense>
    </PageStoriesProvider>
  );
};

export { GuideDoc };
