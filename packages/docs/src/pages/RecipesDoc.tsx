import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, Suspense, lazy, useMemo } from 'react';
import { Skeleton } from '../../../ods-react/src/components/skeleton/src';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { type NavPage } from '../nav/model';

/* Recipes landing: a full-width grid (no ToC), rendered straight through the
   MDX provider — the <Recipes /> component is self-contained. */

const RECIPE_MODULES = import.meta.glob('../content/recipes/*.mdx');

const RecipesDoc = ({ page }: { page: NavPage }) => {
  const key = page.id.replace('recipes/', '');
  const loader = RECIPE_MODULES[`../content/recipes/${key}.mdx`];
  const Doc = useMemo(
    () => (loader ? lazy(loader as () => Promise<{ default: ComponentType }>) : null),
    [loader],
  );

  if (!Doc) {
    return null;
  }
  return (
    <Suspense fallback={ <Skeleton style={{ height: '320px', width: '100%' }} /> }>
      <article className="doc">
        <MDXProvider components={ MDX_COMPONENTS }>
          <Doc />
        </MDXProvider>
      </article>
    </Suspense>
  );
};

export { RecipesDoc };
