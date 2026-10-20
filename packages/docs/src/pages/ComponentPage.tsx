import { useMemo } from 'react';
import { DemoCanvas, buildSandboxSnippet } from '../demo/DemoCanvas';
import { composeModule } from '../demo/composeModule';
import { extractStorySources, storyTitle } from '../demo/extractSource';
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
  const showRecipes = useMemo(() => hasRecipesFor(component), [component]);

  return (
    <section>
      <p data-testid="demo-count">{ demos.length } démos composées</p>
      { demos.map(({ Component, name }) => {
        const source = sources[name];
        const imports = (storiesModule[name] as { globals?: { imports?: string } } | undefined)?.globals?.imports;
        return (
          <DemoCanvas
            dark={ dark }
            key={ name }
            sandboxCode={ source ? buildSandboxSnippet(source, imports) : undefined }
            source={ source }
            title={ storyTitle(name) }
            tokens={ tokens }>
            <Component />
          </DemoCanvas>
        );
      }) }

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
