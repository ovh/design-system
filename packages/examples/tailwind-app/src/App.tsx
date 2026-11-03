import { BADGE_STATUS, BUTTON_EMPHASIS, Badge, Button, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import blueJeansCss from '@ovhcloud/ods-themes/blue-jeans/css?inline';
import aluminiumDarkCss from '@ovhcloud/ods-themes/aluminium-dark/css?inline';
import blueJeansDarkCss from '@ovhcloud/ods-themes/blue-jeans-dark/css?inline';
import { type ReactElement, useEffect, useState } from 'react';

/* Each theme is an overlay loaded after the default one (index.css), dark after its light theme.
   The Tailwind utilities read the ODS variables, so they follow the switch with no rebuild. */
const THEMES: Record<string, string[]> = {
  'Aluminium': [],
  'Aluminium dark': [aluminiumDarkCss],
  'Blue Jeans': [blueJeansCss],
  'Blue Jeans dark': [blueJeansCss, blueJeansDarkCss],
};

function App(): ReactElement {
  const [theme, setTheme] = useState('Aluminium');

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = THEMES[theme].join('\n');
    document.head.append(style);
    return () => style.remove();
  }, [theme]);

  return (
    <main className="min-h-screen bg-ods-surface-page p-ods-gap-section font-ods-body text-ods-content-text">
      <div className="mx-auto flex max-w-2xl flex-col gap-ods-gap-group">
        <div className="flex flex-wrap gap-ods-gap-inline" role="group" aria-label="Theme">
          { Object.keys(THEMES).map((name) => (
            <Button
              aria-pressed={ name === theme }
              emphasis={ name === theme ? BUTTON_EMPHASIS.high : BUTTON_EMPHASIS.medium }
              key={ name }
              onClick={ () => setTheme(name) }>
              { name }
            </Button>
          )) }
        </div>

        <section
          className="flex flex-col gap-ods-gap-block rounded-ods-container border border-ods-border-container bg-ods-surface-raised p-ods-gap-group shadow-ods-raised"
          data-testid="card">
          <Text className="text-ods-content-heading" preset={ TEXT_PRESET.heading3 }>
            Tailwind utilities on the ODS tokens
          </Text>
          <Text preset={ TEXT_PRESET.paragraph }>
            This card is laid out with Tailwind only: its ground, border, radius, spacing and font read the ODS semantic tokens.
          </Text>
          <div className="flex items-center gap-ods-gap-inline">
            <Badge status={ BADGE_STATUS.success }>Ready</Badge>
            <span className="rounded-ods-pill bg-ods-surface-brand px-ods-inset-inline text-ods-content-on-brand-solid">brand</span>
          </div>
        </section>
      </div>
    </main>
  );
}

export { App };
