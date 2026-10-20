import { useMemo } from 'react';
import { DemoCanvas, buildSandboxSnippet } from '../demo/DemoCanvas';
import { composeModule } from '../demo/composeModule';
import { extractStorySources, storyTitle } from '../demo/extractSource';
import { DocArticle } from '../doc/DocArticle';
import { Heading } from '../doc/Heading';
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
    <DocArticle>
      { demos.map(({ Component, name }) => {
        const source = sources[name];
        const imports = (storiesModule[name] as { globals?: { imports?: string } } | undefined)?.globals?.imports;
        return (
          <DemoCanvas
            dark={ dark }
            heading
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
          <Heading label="Related Recipes" level={ 2 } />
          <Recipes component={ component } />
        </>
      ) }
    </DocArticle>
  );
};

export { ComponentPage };
