import { useMemo } from 'react';
import { DemoFrame } from '../demo/DemoFrame';
import { DemoSource } from '../demo/DemoSource';
import { composeModule } from '../demo/composeModule';
import { extractStorySources } from '../demo/extractSource';
import { Recipes, hasRecipesFor } from '../doc/ports/recipes/Recipes';

interface ComponentPageProp {
  component: string;
  dark: boolean;
  rawSource: string;
  storiesModule: Record<string, unknown>;
  title: string;
  tokens: Record<string, string>;
}

const ComponentPage = ({ component, dark, rawSource, storiesModule, title, tokens }: ComponentPageProp) => {
  const demos = useMemo(() => composeModule(storiesModule), [storiesModule]);
  const sources = useMemo(() => extractStorySources(rawSource), [rawSource]);
  // A component's recipes, shown at the bottom like the old examples.mdx did —
  // only when there are any (derived from the recipe data, no per-component config).
  const showRecipes = useMemo(() => hasRecipesFor(component), [component]);

  return (
    <section>
      <h2>{ title }</h2>
      <p data-testid="demo-count">{ demos.length } démos composées</p>
      { demos.map(({ Component, name }) => (
        <article key={ name } style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '.9rem', fontFamily: 'monospace' }}>{ name }</h3>
          <DemoFrame dark={ dark } tokens={ tokens }>
            <Component />
          </DemoFrame>
          { sources[name] && <DemoSource source={ sources[name] } /> }
        </article>
      )) }

      { showRecipes && (
        <>
          <h2>Recipes</h2>
          <Recipes component={ component } />
        </>
      ) }
    </section>
  );
};

export { ComponentPage };
