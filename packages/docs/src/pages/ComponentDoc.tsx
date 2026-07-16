import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, Suspense, lazy, useMemo, useState } from 'react';
import { Skeleton } from '../../../ods-react/src/components/skeleton/src';
import { TABS_VARIANT, Tab, TabList, Tabs } from '../../../ods-react/src/components/tabs/src';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { PageStoriesProvider } from '../doc/PageStories';
import { type NavPage } from '../nav/model';
import { ComponentPage } from './ComponentPage';

/* Component page = Documentation (neutral-format MDX rendered through the
   provider) + Examples (every public story composed). The MDX modules load
   lazily per component. */

const DOC_MODULES = import.meta.glob('../content/components/*/documentation.mdx');

const ComponentDoc = ({ page, tokens }: { page: NavPage, tokens: Record<string, string> }) => {
  const [tab, setTab] = useState('documentation');

  const docKey = `../content/components/${page.id.replace('components/', '')}/documentation.mdx`;
  const loader = DOC_MODULES[docKey];
  const Doc = useMemo(
    () => (loader ? lazy(loader as () => Promise<{ default: ComponentType }>) : null),
    [loader],
  );
  const currentTab = Doc ? tab : 'examples';

  return (
    <PageStoriesProvider raw={ page.raw } storiesModule={ page.storiesModule }>
      { Doc && (
        <Tabs onValueChange={ ({ value }) => setTab(value) } value={ currentTab } variant={ TABS_VARIANT.switch }>
          <TabList>
            <Tab value="documentation">Documentation</Tab>
            <Tab value="examples">Examples</Tab>
          </TabList>
        </Tabs>
      ) }

      { currentTab === 'documentation' && Doc && (
        <Suspense fallback={ <Skeleton style={{ height: '320px', marginTop: '16px', width: '100%' }} /> }>
          <article className="doc">
            <MDXProvider components={ MDX_COMPONENTS }>
              <Doc />
            </MDXProvider>
          </article>
        </Suspense>
      ) }

      { currentTab === 'examples' && (
        <ComponentPage dark={ false } rawSource={ page.raw! } storiesModule={ page.storiesModule! } title={ page.title } tokens={ tokens } />
      ) }
    </PageStoriesProvider>
  );
};

export { ComponentDoc };
