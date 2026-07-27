import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, Suspense, lazy, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Skeleton } from '../../../ods-react/src/components/skeleton/src';
import { TABS_VARIANT, Tab, TabList, Tabs } from '../../../ods-react/src/components/tabs/src';
import { DocArticle } from '../doc/DocArticle';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { PageStoriesProvider } from '../doc/PageStories';
import { TechnicalSpecification } from '../doc/tech/TechnicalSpecification';
import { hasTechData } from '../doc/tech/techData';
import { type NavPage } from '../nav/model';
import { ComponentPage } from './ComponentPage';

/* Component page = Documentation (neutral-format MDX) + Technical information
   (props/enums/css from the typedoc JSON) + Examples (every public story
   composed). The active tab lives in the URL so every view is deep-linkable. */

const DOC_MODULES = import.meta.glob('../content/components/*/documentation.mdx');

const ComponentDoc = ({ page, tokens }: { page: NavPage, tokens: Record<string, string> }) => {
  const { tab } = useParams();
  const navigate = useNavigate();

  const componentKey = page.id.replace('components/', '');
  const loader = DOC_MODULES[`../content/components/${componentKey}/documentation.mdx`];
  const Doc = useMemo(
    () => (loader ? lazy(loader as () => Promise<{ default: ComponentType }>) : null),
    [loader],
  );
  const hasTech = hasTechData(componentKey);

  const tabs = [
    Doc && { label: 'Documentation', value: 'documentation' },
    hasTech && { label: 'Technical information', value: 'technical' },
    { label: 'Examples', value: 'examples' },
  ].filter(Boolean) as { label: string, value: string }[];

  // Fall back to the first available tab when the URL segment isn't valid here.
  const requested = tab ?? 'documentation';
  const currentTab = tabs.some((entry) => entry.value === requested) ? requested : tabs[0].value;
  const toPath = (value: string) => (value === 'documentation' ? page.path : `${page.path}/${value}`);

  return (
    <PageStoriesProvider raw={ page.raw } storiesModule={ page.storiesModule }>
      { tabs.length > 1 && (
        <Tabs onValueChange={ ({ value }) => navigate(toPath(value)) } value={ currentTab } variant={ TABS_VARIANT.switch }>
          <TabList>
            { tabs.map((entry) => <Tab key={ entry.value } value={ entry.value }>{ entry.label }</Tab>) }
          </TabList>
        </Tabs>
      ) }

      { currentTab === 'documentation' && Doc && (
        <Suspense fallback={ <Skeleton style={{ height: '320px', marginTop: '16px', width: '100%' }} /> }>
          <DocArticle>
            <MDXProvider components={ MDX_COMPONENTS }>
              <Doc />
            </MDXProvider>
          </DocArticle>
        </Suspense>
      ) }

      { currentTab === 'technical' && (
        <DocArticle>
          <TechnicalSpecification component={ componentKey } />
        </DocArticle>
      ) }

      { currentTab === 'examples' && (
        <ComponentPage dark={ false } rawSource={ page.raw! } storiesModule={ page.storiesModule! } title={ page.title } tokens={ tokens } />
      ) }
    </PageStoriesProvider>
  );
};

export { ComponentDoc };
