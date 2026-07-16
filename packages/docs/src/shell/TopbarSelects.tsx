import { useEffect, useState } from 'react';
import versions from '../../../storybook/assets/ods-versions.json';
import { version as currentVersion } from '../../../../lerna.json';
import { Select, SelectContent, SelectControl } from '../../../ods-react/src/components/select/src';

/* Same behavior and storage key as the old manager addons: the preference
   survives the platform switch. */
const THEME_KEY = 'ods-doc-theme';

type ThemeChoice = 'dark' | 'light' | 'system';

const THEME_ITEMS = [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
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
      <SelectControl />
      <SelectContent />
    </Select>
  );
};

const VersionSelect = () => {
  const items = (versions as string[]).map((v) => ({ label: `v${v}`, value: v }));

  return (
    <Select
      data-testid="version-select"
      items={ items }
      onValueChange={ ({ value }) => {
        const target = value[0];
        if (target && target !== currentVersion) {
          window.location.href = `https://ovh.github.io/design-system/v${target}/`;
        }
      } }
      value={ [currentVersion] }>
      <SelectControl />
      <SelectContent />
    </Select>
  );
};

export { ThemeSelect, VersionSelect };
