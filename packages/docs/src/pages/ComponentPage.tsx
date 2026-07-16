import { useMemo } from 'react';
import { DemoFrame } from '../demo/DemoFrame';
import { composeModule } from '../demo/composeModule';

interface ComponentPageProp {
  dark: boolean;
  storiesModule: Record<string, unknown>;
  title: string;
  tokens: Record<string, string>;
}

const ComponentPage = ({ dark, storiesModule, title, tokens }: ComponentPageProp) => {
  const demos = useMemo(() => composeModule(storiesModule), [storiesModule]);

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
        </article>
      )) }
    </section>
  );
};

export { ComponentPage };
