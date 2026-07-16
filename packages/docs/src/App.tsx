import { Suspense, lazy, useEffect, useState } from 'react';
import * as ButtonStories from '../../storybook/stories/components/button/button.stories';
import * as CommandStories from '../../storybook/stories/components/command/command.stories';
import * as DatepickerStories from '../../storybook/stories/components/datepicker/datepicker.stories';
import { Input } from '../../ods-react/src/components/input/src';
import { Skeleton } from '../../ods-react/src/components/skeleton/src';
import { Tab, TabList, Tabs, type TabsValueChangeEvent } from '../../ods-react/src/components/tabs/src';
import { TEXT_PRESET, Text } from '../../ods-react/src/components/text/src';
import { Toggle } from '../../ods-react/src/components/toggle/src';
import { ComponentPage } from './pages/ComponentPage';
import './shell/dark.css';

const Sandbox = lazy(() => import('./sandbox/Sandbox').then((m) => ({ default: m.Sandbox })));

const COBAYES = [
  { key: 'button', module: ButtonStories, title: 'Button' },
  { key: 'command', module: CommandStories, title: 'Command' },
  { key: 'datepicker', module: DatepickerStories, title: 'Datepicker' },
] as const;

const App = () => {
  const [current, setCurrent] = useState<string>('button');
  const [dark, setDark] = useState(false);
  const [primary, setPrimary] = useState('');

  /* The sandbox chunk (Monaco + the ODS type graph, ~9 MB) is fetched during
     browser idle time so opening the tab is instant instead of a cold load. */
  useEffect(() => {
    const idle = window.setTimeout(() => {
      import('./sandbox/Sandbox');
    }, 1500);
    return () => window.clearTimeout(idle);
  }, []);

  /* Dark skins the docs shell only — exactly what the current Storybook docs
     do. The demo frames keep rendering light (ODS ships no dark theme). */
  useEffect(() => {
    if (dark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [dark]);

  const cobaye = COBAYES.find((c) => c.key === current) ?? COBAYES[0];
  const tokens = primary ? { '--ods-color-primary-500': primary } : {};

  return (
    <main style={{ margin: '0 auto', maxWidth: '860px', padding: '24px' }}>
      <Text preset={ TEXT_PRESET.heading2 }>ODS Docs — POC</Text>

      <nav style={{ alignItems: 'center', display: 'flex', gap: '16px', margin: '16px 0' }}>
        <Tabs onValueChange={ ({ value }: TabsValueChangeEvent) => setCurrent(value) } value={ current }>
          <TabList>
            { COBAYES.map(({ key, title }) => (
              <Tab data-testid={ `nav-${key}` } key={ key } value={ key }>{ title }</Tab>
            )) }
            <Tab data-testid="nav-sandbox" value="sandbox">Sandbox</Tab>
          </TabList>
        </Tabs>

        <label style={{ alignItems: 'center', display: 'flex', gap: '8px', marginLeft: 'auto' }}>
          <Toggle checked={ dark } data-testid="dark-toggle" onCheckedChange={ ({ checked }) => setDark(checked) } />
          <Text preset={ TEXT_PRESET.caption }>dark</Text>
        </label>

        <Input
          data-testid="token-input"
          onChange={ (e) => setPrimary(e.target.value) }
          placeholder="--ods-color-primary-500"
          style={{ maxWidth: '210px' }}
          value={ primary }
        />
      </nav>

      { current === 'sandbox'
        ? (
          <Suspense fallback={
            <div style={{ display: 'grid', gap: '16px' }}>
              <Skeleton style={{ height: '280px', width: '100%' }} />
              <Skeleton style={{ borderRadius: '4px', height: '74px', width: '100%' }} />
            </div>
          }>
            <Sandbox dark={ false } tokens={ tokens } />
          </Suspense>
        )
        : <ComponentPage dark={ false } storiesModule={ cobaye.module } title={ cobaye.title } tokens={ tokens } /> }
    </main>
  );
};

export { App };
