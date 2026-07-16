import { useMemo } from 'react';
import { DemoFrame } from '../demo/DemoFrame';
import { DemoSource } from '../demo/DemoSource';
import { composeModule } from '../demo/composeModule';
import { extractStorySources } from '../demo/extractSource';

interface ComponentPageProp {
  dark: boolean;
  rawSource: string;
  storiesModule: Record<string, unknown>;
  title: string;
  tokens: Record<string, string>;
}

const ComponentPage = ({ dark, rawSource, storiesModule, title, tokens }: ComponentPageProp) => {
  const demos = useMemo(() => composeModule(storiesModule), [storiesModule]);
  const sources = useMemo(() => extractStorySources(rawSource), [rawSource]);

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
    </section>
  );
};

export { ComponentPage };
