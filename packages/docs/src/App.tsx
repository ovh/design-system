import { Suspense, lazy, useState } from 'react';
import * as ButtonStories from '../../storybook/stories/components/button/button.stories';
import * as CommandStories from '../../storybook/stories/components/command/command.stories';
import * as DatepickerStories from '../../storybook/stories/components/datepicker/datepicker.stories';
import { ComponentPage } from './pages/ComponentPage';
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

  const cobaye = COBAYES.find((c) => c.key === current) ?? COBAYES[0];
  const tokens = primary ? { '--ods-color-primary-500': primary } : {};

  return (
    <main style={{ fontFamily: 'sans-serif', margin: '0 auto', maxWidth: '860px', padding: '24px' }}>
      <h1>ODS Docs — POC portable-stories</h1>

      <nav style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        { COBAYES.map(({ key, title }) => (
          <button data-testid={ `nav-${key}` } key={ key } onClick={ () => setCurrent(key) } style={{ fontWeight: current === key ? 700 : 400 }}>
            { title }
          </button>
        )) }
        <label style={{ marginLeft: 'auto' }}>
          <input checked={ dark } data-testid="dark-toggle" onChange={ (e) => setDark(e.target.checked) } type="checkbox" /> dark
        </label>
        <label>
          primary <input data-testid="token-input" onChange={ (e) => setPrimary(e.target.value) } placeholder="#ff0000" size={ 8 } value={ primary } />
        </label>
        <button data-testid="nav-sandbox" onClick={ () => setCurrent('sandbox') } style={{ fontWeight: current === 'sandbox' ? 700 : 400 }}>
          Sandbox
        </button>
      </nav>

      { current === 'sandbox'
        ? <Suspense fallback={ <p>Chargement de la sandbox…</p> }><Sandbox dark={ dark } tokens={ tokens } /></Suspense>
        : <ComponentPage dark={ dark } storiesModule={ cobaye.module } title={ cobaye.title } tokens={ tokens } /> }
    </main>
  );
};

export { App };
