import { useMemo } from 'react';
import { DemoCanvas, buildSandboxSnippet } from '../demo/DemoCanvas';
import { type ComposedDemo, composeModule } from '../demo/composeModule';
import { extractStorySources, isAccessibilityStory, orderStories } from '../demo/extractSource';
import { Heading } from '../doc/Heading';
import { Recipes, hasRecipesFor } from '../doc/ports/recipes/Recipes';

interface ComponentPageProp {
  component: string;
  dark: boolean;
  rawSource: string;
  storiesModule: Record<string, unknown>;
  tokens: Record<string, string>;
}

/* CamelCase story export → readable title (AccessibilityIconOnly →
   "Accessibility icon only"). */
const humanize = (name: string): string => {
  const spaced = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
};

/* The demos sit under an "Accessibility" section heading: drop the redundant
   prefix from their own title (AccessibilityIconOnly → "Icon only"). */
const demoTitle = (name: string): string => humanize(isAccessibilityStory(name) ? name.slice('Accessibility'.length) : name);

const ComponentPage = ({ component, dark, rawSource, storiesModule, tokens }: ComponentPageProp) => {
  const sources = useMemo(() => extractStorySources(rawSource), [rawSource]);
  // composeModule walks the module namespace, alphabetical by spec: reorder
  // by the stories file (the sources keep its declaration order).
  const demos = useMemo(() => {
    const byName = new Map(composeModule(storiesModule).map((demo) => [demo.name, demo]));
    const ordered = orderStories(Object.keys(sources)).flatMap((name) => byName.get(name) ?? []);
    return [...ordered, ...[...byName.values()].filter((demo) => !ordered.includes(demo))];
  }, [sources, storiesModule]);
  const showRecipes = useMemo(() => hasRecipesFor(component), [component]);

  const examples = demos.filter(({ name }) => !isAccessibilityStory(name));
  const accessibility = demos.filter(({ name }) => isAccessibilityStory(name));

  // Each demo gets its own h3 so the page ToC lists it, grouped under the h2 sections.
  const renderDemo = ({ Component, name }: ComposedDemo) => {
    const source = sources[name];
    const imports = (storiesModule[name] as { globals?: { imports?: string } } | undefined)?.globals?.imports;
    return (
      <div key={ name }>
        <Heading label={ demoTitle(name) } level={ 3 } />
        <DemoCanvas
          dark={ dark }
          sandboxCode={ source ? buildSandboxSnippet(source, imports) : undefined }
          source={ source }
          tokens={ tokens }>
          <Component />
        </DemoCanvas>
      </div>
    );
  };

  return (
    <section>
      { examples.length > 0 && (
        <>
          <Heading label="Examples" level={ 2 } />
          { examples.map(renderDemo) }
        </>
      ) }

      { accessibility.length > 0 && (
        <>
          <Heading label="Accessibility" level={ 2 } />
          { accessibility.map(renderDemo) }
        </>
      ) }

      { showRecipes && (
        <>
          <Heading label="Recipes" level={ 2 } />
          <Recipes component={ component } />
        </>
      ) }
    </section>
  );
};

export { ComponentPage };
