import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, type ReactNode, Suspense, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TABS_VARIANT, Tab, TabContent, TabList, Tabs } from '../../../ods-react/src/components/tabs/src';
import { DocArticle } from '../doc/DocArticle';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { DocSkeleton } from '../doc/DocSkeleton';
import { LoadedPageStories, usePageStories } from '../doc/PageStories';
import { IconGallery } from '../doc/ports/iconGallery/IconGallery';
import { TechnicalSpecification } from '../doc/tech/TechnicalSpecification';
import { getTechData, hasTechData, techKey } from '../doc/tech/techData';
import { type NavPage } from '../nav/model';
import { useNarrow } from '../shell/Shell';
import { lazyOnce, loadOnce } from '../nav/loadOnce';
import { ComponentPage } from './ComponentPage';

/* Component page = Documentation (neutral-format MDX) + Technical information
   (props/enums/css from the typedoc JSON) + Examples (every public story
   composed). The active tab lives in the URL so every view is deep-linkable. */

const DOC_MODULES = import.meta.glob('../content/components/*/documentation.mdx');

/* A few components carry an extra browsing tab of their own (Storybook had
   them as sibling doc pages) — keyed by component so the tab only shows up
   where there is something to browse. */
const GALLERIES: Record<string, ComponentType> = { icon: IconGallery };

/* The tabs of a component page, the documentation first: the pre-render (entry-server.tsx) writes a
   page for each. */
const componentTabs = (componentKey: string): { label: string, value: string }[] => [
  DOC_MODULES[`../content/components/${componentKey}/documentation.mdx`] && { label: 'Documentation', value: 'documentation' },
  GALLERIES[componentKey] && { label: 'Gallery', value: 'gallery' },
  hasTechData(componentKey) && { label: 'Technical information', value: 'technical' },
  { label: 'Examples', value: 'examples' },
].filter(Boolean) as { label: string, value: string }[];

/* The examples tab: every story of the page's module, composed. */
const ComponentExamples = ({ component, tokens }: { component: string, tokens: Record<string, string> }) => {
  const { raw, storiesModule } = usePageStories();
  return <ComponentPage component={ component } dark={ false } rawSource={ raw ?? '' } storiesModule={ storiesModule ?? {} } tokens={ tokens } />;
};

const ComponentDoc = ({ page, tokens }: { page: NavPage, tokens: Record<string, string> }) => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const componentKey = page.id.replace('components/', '');
  // kebab folder → PascalCase React name (button-group → ButtonGroup), matching
  // the recipe odsComponents tags.
  const componentName = componentKey.replace(/(^|-)([a-z])/g, (_m, _s, c: string) => c.toUpperCase());
  const loader = DOC_MODULES[`../content/components/${componentKey}/documentation.mdx`];
  const Doc = loader ? lazyOnce(loader, loader) : null;

  // React lazy() only fetches on first render, and the documentation tab is
  // gated on the stories chunk: warm the MDX chunk now so both loads run in
  // parallel (lazyOnce reuses the in-flight request).
  useEffect(() => {
    if (loader) {
      loadOnce(loader, loader);
    }
  }, [loader]);

  const Gallery = GALLERIES[componentKey];
  const tabs = componentTabs(componentKey);

  // Fall back to the first available tab when the URL segment isn't valid here.
  const requested = tab ?? 'documentation';
  const currentTab = tabs.some((entry) => entry.value === requested) ? requested : tabs[0].value;
  // On a narrow screen the tab strip outgrows the column: its arrows reach the last tabs.
  const narrow = useNarrow();
  const toPath = (value: string) => (value === 'documentation' ? page.path : `${page.path}/${value}`);

  /* The stories module and its raw source load lazily (they only ship in the page's own chunk):
     the tabs that consume them (documentation's Canvas, the anatomy of technical, examples) wait
     behind the skeleton until they land; the gallery loads its own data. */
  const withStories = (variant: 'component' | 'examples' | 'technical', children: ReactNode) => (
    <Suspense fallback={ <DocSkeleton variant={ variant } /> }>
      { page.stories ? <LoadedPageStories load={ page.stories }>{ children }</LoadedPageStories> : children }
    </Suspense>
  );

  const content = (
    <>
      { currentTab === 'documentation' && Doc && (
        <DocArticle>
          { withStories('component', (
            <MDXProvider components={ MDX_COMPONENTS }>
              <Doc />
            </MDXProvider>
          )) }
        </DocArticle>
      ) }

      { currentTab === 'gallery' && Gallery && <Gallery /> }

      { currentTab === 'technical' && (
        <DocArticle>
          { withStories('technical', <TechnicalSpecification component={ componentKey } />) }
        </DocArticle>
      ) }

      { currentTab === 'examples' && (
        <DocArticle>
          { withStories('examples', <ComponentExamples component={ componentName } tokens={ tokens } />) }
        </DocArticle>
      ) }
    </>
  );

  return (
    <div className="doc-page">
      { tabs.length > 1
        ? (
          // The route picks the tab: only the selected panel is rendered, but it sits in its tabpanel.
          <Tabs onValueChange={ ({ value }) => navigate(toPath(value)) } value={ currentTab } variant={ TABS_VARIANT.switch } withArrows={ narrow }>
            <TabList className="doc-page__tabs">
              { tabs.map((entry) => <Tab key={ entry.value } value={ entry.value }>{ entry.label }</Tab>) }
            </TabList>
            <TabContent value={ currentTab }>{ content }</TabContent>
          </Tabs>
        )
        : content }
    </div>
  );
};

/* What the first render of a tab reads, loaded: the page hydrates it without suspending (main.tsx). */
const preloadComponentDoc = (page: NavPage, tab?: string): Promise<unknown> => {
  const componentKey = page.id.replace('components/', '');
  const loader = DOC_MODULES[`../content/components/${componentKey}/documentation.mdx`];
  const current = tab ?? 'documentation';
  return Promise.all([
    current === 'documentation' && loader ? loadOnce(loader, loader) : undefined,
    current !== 'gallery' && page.stories ? loadOnce(page.stories, page.stories) : undefined,
    current === 'technical' && hasTechData(componentKey) ? loadOnce(techKey(componentKey), () => getTechData(componentKey)) : undefined,
  ]);
};

export { ComponentDoc, componentTabs, preloadComponentDoc };
