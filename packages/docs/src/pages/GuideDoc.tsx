import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, Suspense, lazy, useMemo } from 'react';
import { Skeleton } from '../../../ods-react/src/components/skeleton/src';
import { DocArticle } from '../doc/DocArticle';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { PageStoriesProvider } from '../doc/PageStories';
import { GUIDE_STORY_MODULES } from '../content/guides/storyModules';
import { type NavPage } from '../nav/model';

/* Static page = one neutral-format MDX rendered through the provider. A guide
   MAY embed component demos (<Canvas from="button" />); those modules come
   from GUIDE_STORY_MODULES, keyed by guide id. */

const GUIDE_MODULES = import.meta.glob('../content/guides/*.mdx');

const GuideDoc = ({ page }: { page: NavPage }) => {
  const key = page.id.replace('guides/', '');
  const loader = GUIDE_MODULES[`../content/guides/${key}.mdx`];
  const Doc = useMemo(
    () => (loader ? lazy(loader as () => Promise<{ default: ComponentType }>) : null),
    [loader],
  );

  if (!Doc) {
    return null;
  }
  return (
    <PageStoriesProvider storyModules={ GUIDE_STORY_MODULES[key] }>
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

export { GuideDoc };
