import { MDXProvider } from '@mdx-js/react';
import { Suspense } from 'react';
import { MDX_COMPONENTS } from '../doc/DocComponents';
import { RecipePage } from '../doc/ports/recipes/RecipePage';
import { DocSkeleton } from '../doc/DocSkeleton';
import { MarkdownLink } from '../doc/MarkdownLink';
import { lazyOnce, loadOnce } from '../nav/loadOnce';
import { type NavPage } from '../nav/model';

/* Recipe Gallery: a full-width grid (no ToC, so the Markdown link leads the
   article), rendered straight through the MDX provider — the <Recipes />
   component is self-contained. Every other recipe page is that one recipe,
   in full. */

const RECIPE_MODULES = import.meta.glob('../content/recipes/*.mdx');

const RecipesDoc = ({ page }: { page: NavPage }) => {
  const key = page.id.replace('recipes/', '');
  const loader = RECIPE_MODULES[`../content/recipes/${key}.mdx`];
  const Doc = loader ? lazyOnce(loader, loader) : null;

  // No MDX file: the page is one recipe, as a full documentation page.
  if (!Doc) {
    return <RecipePage recipeKey={ key } />;
  }
  return (
    <article className="doc doc--wide">
      <MarkdownLink className="doc-layout__toc-markdown" />
      <Suspense fallback={ <DocSkeleton variant="gallery" /> }>
        <MDXProvider components={ MDX_COMPONENTS }>
          <Doc />
        </MDXProvider>
      </Suspense>
    </article>
  );
};

/* What the first render of a recipe page reads, loaded: main.tsx hydrates the page with it, and the shell
   loads it ahead of a click (preloadRoute, routes.tsx); either way, it renders without suspending. */
const preloadRecipesDoc = (page: NavPage): Promise<unknown> => {
  const loader = RECIPE_MODULES[`../content/recipes/${page.id.replace('recipes/', '')}.mdx`];
  return loader ? loadOnce(loader, loader) : Promise.resolve();
};

export { RecipesDoc, preloadRecipesDoc };
