import { useEffect, useState } from 'react';
import versions from '../../../storybook/assets/ods-versions.json';
import { version as currentVersion } from '../../../../lerna.json';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Select, SelectContent, SelectControl } from '../../../ods-react/src/components/select/src';

/* Same behavior and storage key as the old manager addons: the preference
   survives the platform switch. */
const THEME_KEY = 'ods-doc-theme';
const BASE_URL = 'https://ovh.github.io/design-system';

type ThemeChoice = 'dark' | 'light' | 'system';

const THEME_ICONS: Record<ThemeChoice, ICON_NAME> = {
  dark: ICON_NAME.moon,
  light: ICON_NAME.sun,
  system: ICON_NAME.monitor,
};

const THEME_ITEMS = [
  { customRendererData: { icon: THEME_ICONS.system }, label: 'System', value: 'system' },
  { customRendererData: { icon: THEME_ICONS.light }, label: 'Light', value: 'light' },
  { customRendererData: { icon: THEME_ICONS.dark }, label: 'Dark', value: 'dark' },
];

function readStoredTheme(): ThemeChoice {
  try {
    const stored = JSON.parse(localStorage.getItem(THEME_KEY) ?? '""');
    return stored === 'dark' || stored === 'light' ? stored : 'system';
  } catch {
    return 'system';
  }
}

const ThemeSelect = () => {
  const [choice, setChoice] = useState<ThemeChoice>(readStoredTheme);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(choice));
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const dark = choice === 'dark' || (choice === 'system' && media.matches);
      if (dark) {
        document.body.setAttribute('data-theme', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
      }
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [choice]);

  return (
    <Select
      data-testid="theme-select"
      items={ THEME_ITEMS }
      onValueChange={ ({ value }) => setChoice((value[0] as ThemeChoice) ?? 'system') }
      value={ [choice] }>
      <SelectControl
        customItemRenderer={ ({ text }) => (
          <span className="shell__select-item">
            <Icon name={ THEME_ICONS[choice] } /> { text }
          </span>
        ) } />
      <SelectContent
        customOptionRenderer={ ({ customData, label }) => (
          <span className="shell__select-item">
            <Icon name={ (customData as { icon: ICON_NAME }).icon } /> { label }
          </span>
        ) } />
    </Select>
  );
};

/* The deployed docs live under /vX.Y.Z/ per version, plus a /latest/ alias
   always pointing at the newest one. */
function detectCurrentChannel(): string {
  const versioned = window.location.pathname.match(/\/v(\d+\.\d+\.\d+[^/]*)\//);
  if (versioned) {
    return versioned[1];
  }
  if (window.location.pathname.includes('/latest/')) {
    return 'latest';
  }
  // Local/dev build: the workspace version IS the latest.
  return currentVersion === (versions as string[])[0] ? 'latest' : currentVersion;
}

const VERSION_ITEMS = [
  { label: 'latest', value: 'latest' },
  ...(versions as string[]).map((v) => ({ label: `v${v}`, value: v })),
];

const VersionSelect = () => {
  const current = detectCurrentChannel();

  return (
    <Select
      data-testid="version-select"
      items={ VERSION_ITEMS }
      onValueChange={ ({ value }) => {
        const target = value[0];
        if (target && target !== current) {
          window.location.href = target === 'latest' ? `${BASE_URL}/latest/` : `${BASE_URL}/v${target}/`;
        }
      } }
      value={ [current] }>
      <SelectControl />
      <SelectContent />
    </Select>
  );
};

export { ThemeSelect, VersionSelect };
