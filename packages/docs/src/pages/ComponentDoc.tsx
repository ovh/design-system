import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, Suspense, lazy, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TABS_VARIANT, Tab, TabList, Tabs } from '../../../ods-react/src/components/tabs/src';
import { DocArticle } from '../doc/DocArticle';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { DocSkeleton } from '../doc/DocSkeleton';
import { PageStoriesProvider } from '../doc/PageStories';
import { IconGallery } from '../doc/ports/iconGallery/IconGallery';
import { TechnicalSpecification } from '../doc/tech/TechnicalSpecification';
import { hasTechData } from '../doc/tech/techData';
import { type NavPage } from '../nav/model';
import { useStories } from '../nav/useStories';
import { ComponentPage } from './ComponentPage';

/* Component page = Documentation (neutral-format MDX) + Technical information
   (props/enums/css from the typedoc JSON) + Examples (every public story
   composed). The active tab lives in the URL so every view is deep-linkable. */

const DOC_MODULES = import.meta.glob('../content/components/*/documentation.mdx');

/* A few components carry an extra browsing tab of their own (Storybook had
   them as sibling doc pages) — keyed by component so the tab only shows up
   where there is something to browse. */
const GALLERIES: Record<string, ComponentType> = { icon: IconGallery };

const ComponentDoc = ({ page, tokens }: { page: NavPage, tokens: Record<string, string> }) => {
  const { tab } = useParams();
  const navigate = useNavigate();
  // The stories module and its raw source load lazily (they only ship in the
  // page's own chunk); only the tabs that consume them (documentation's
  // Canvas, examples) wait behind the skeleton until they land — technical
  // and gallery load their own data.
  const stories = useStories(page.stories);

  const componentKey = page.id.replace('components/', '');
  // kebab folder → PascalCase React name (button-group → ButtonGroup), matching
  // the recipe odsComponents tags.
  const componentName = componentKey.replace(/(^|-)([a-z])/g, (_m, _s, c: string) => c.toUpperCase());
  const loader = DOC_MODULES[`../content/components/${componentKey}/documentation.mdx`];
  const Doc = useMemo(
    () => (loader ? lazy(loader as () => Promise<{ default: ComponentType }>) : null),
    [loader],
  );

  // React lazy() only fetches on first render, and the documentation tab is
  // gated on the stories chunk: warm the MDX chunk now so both loads run in
  // parallel (dynamic imports are cached, lazy() reuses the in-flight request).
  useEffect(() => {
    loader?.();
  }, [loader]);

  const hasTech = hasTechData(componentKey);
  const Gallery = GALLERIES[componentKey];

  const tabs = [
    Doc && { label: 'Documentation', value: 'documentation' },
    Gallery && { label: 'Gallery', value: 'gallery' },
    hasTech && { label: 'Technical information', value: 'technical' },
    { label: 'Examples', value: 'examples' },
  ].filter(Boolean) as { label: string, value: string }[];

  // Fall back to the first available tab when the URL segment isn't valid here.
  const requested = tab ?? 'documentation';
  const currentTab = tabs.some((entry) => entry.value === requested) ? requested : tabs[0].value;
  const toPath = (value: string) => (value === 'documentation' ? page.path : `${page.path}/${value}`);

  return (
    <PageStoriesProvider raw={ stories?.raw } storiesModule={ stories?.module }>
      { tabs.length > 1 && (
        <Tabs onValueChange={ ({ value }) => navigate(toPath(value)) } value={ currentTab } variant={ TABS_VARIANT.switch }>
          <TabList>
            { tabs.map((entry) => <Tab key={ entry.value } value={ entry.value }>{ entry.label }</Tab>) }
          </TabList>
        </Tabs>
      ) }

      { currentTab === 'documentation' && Doc && (
        stories
          ? (
            <Suspense fallback={ <DocSkeleton /> }>
              <DocArticle>
                <MDXProvider components={ MDX_COMPONENTS }>
                  <Doc />
                </MDXProvider>
              </DocArticle>
            </Suspense>
          )
          : <DocSkeleton />
      ) }

      { currentTab === 'gallery' && Gallery && <Gallery /> }

      { currentTab === 'technical' && (
        <DocArticle>
          <TechnicalSpecification component={ componentKey } />
        </DocArticle>
      ) }

      { currentTab === 'examples' && (
        stories
          ? <ComponentPage component={ componentName } dark={ false } rawSource={ stories.raw } storiesModule={ stories.module } title={ page.title } tokens={ tokens } />
          : <DocSkeleton />
      ) }
    </PageStoriesProvider>
  );
};

export { ComponentDoc };
