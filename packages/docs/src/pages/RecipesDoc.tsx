import { MDXProvider } from '@mdx-js/react';
import { type ComponentType, Suspense, lazy, useMemo } from 'react';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { RecipePage } from '../doc/ports/recipes/RecipePage';
import { DocSkeleton } from '../doc/DocSkeleton';
import { type NavPage } from '../nav/model';

/* Recipe Gallery: a full-width grid (no ToC), rendered straight through the
   MDX provider — the <Recipes /> component is self-contained. Every other
   recipe page is that one recipe, in full. */

const RECIPE_MODULES = import.meta.glob('../content/recipes/*.mdx');

const RecipesDoc = ({ page }: { page: NavPage }) => {
  const key = page.id.replace('recipes/', '');
  const loader = RECIPE_MODULES[`../content/recipes/${key}.mdx`];
  const Doc = useMemo(
    () => (loader ? lazy(loader as () => Promise<{ default: ComponentType }>) : null),
    [loader],
  );

  // No MDX file: the page is one recipe, as a full documentation page.
  if (!Doc) {
    return <RecipePage recipeKey={ key } />;
  }
  return (
    <Suspense fallback={ <DocSkeleton /> }>
      <article className="doc doc--wide">
        <MDXProvider components={ MDX_COMPONENTS }>
          <Doc />
        </MDXProvider>
      </article>
    </Suspense>
  );
};

export { RecipesDoc };
