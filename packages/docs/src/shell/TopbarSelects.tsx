import { useEffect, useState } from 'react';
import versions from '../../assets/ods-versions.json';
import { version as currentVersion } from '../../../../lerna.json';
import { BUTTON_EMPHASIS, BUTTON_STATUS, Button } from '../../../ods-react/src/components/button/src';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '../../../ods-react/src/components/menu/src';
import { Select, SelectContent, SelectControl } from '../../../ods-react/src/components/select/src';
import { setThemeScheme } from './themeStyles';

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

/* The color scheme, from an icon button in the topbar as most documentation sites place it. The
   button shows the current choice; its menu lists the three. */
const ThemeMenu = () => {
  const [choice, setChoice] = useState<ThemeChoice>(readStoredTheme);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(choice));
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => setThemeScheme(choice === 'dark' || (choice === 'system' && media.matches) ? 'dark' : 'light');
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [choice]);

  const current = THEME_ITEMS.find((item) => item.value === choice);

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button
          aria-label={ `Color scheme: ${current?.label}` }
          data-testid="theme-menu"
          emphasis={ BUTTON_EMPHASIS.low }
          status={ BUTTON_STATUS.neutral }>
          <Icon name={ THEME_ICONS[choice] } />
        </Button>
      </MenuTrigger>
      <MenuContent>
        { THEME_ITEMS.map((item) => (
          <MenuItem key={ item.value } onSelect={ () => setChoice(item.value as ThemeChoice) } value={ item.value }>
            <span className="shell__select-item">
              <Icon name={ item.customRendererData.icon } /> { item.label }
              { item.value === choice && <Icon name={ ICON_NAME.check } /> }
            </span>
          </MenuItem>
        )) }
      </MenuContent>
    </Menu>
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

const [LATEST_VERSION, ...OLDER_VERSIONS] = versions as string[];

// On the latest channel, the newest release only appears as that channel, labelled with its version;
// the " (latest)" flag shows in the dropdown only. A pinned /vX.Y.Z/ deployment never learns of the
// releases after its build: there the channel reads "Latest" and every version keeps its own entry,
// so that the pinned one stays selected and choosing the channel still leads to /latest/.
function versionItems(channel: string) {
  if (channel === 'latest') {
    return [
      { customRendererData: { suffix: ' (latest)' }, label: `v${LATEST_VERSION}`, value: 'latest' },
      ...OLDER_VERSIONS.map((v) => ({ label: `v${v}`, value: v })),
    ];
  }
  return [
    { label: 'Latest', value: 'latest' },
    ...(versions as string[]).map((v) => ({ label: `v${v}`, value: v })),
  ];
}

const VersionSelect = () => {
  const current = detectCurrentChannel();

  return (
    <Select
      className="shell__topbar-select"
      data-testid="version-select"
      items={ versionItems(current) }
      onValueChange={ ({ value }) => {
        const target = value[0];
        if (target && target !== current) {
          window.location.href = target === 'latest' ? `${BASE_URL}/latest/` : `${BASE_URL}/v${target}/`;
        }
      } }
      overlayConfig={ { sameWidth: false } }
      value={ [current] }>
      <SelectControl aria-label="Version" />
      <SelectContent
        customOptionRenderer={ ({ customData, label }) => (
          <span>{ label }{ (customData as { suffix?: string } | undefined)?.suffix }</span>
        ) } />
    </Select>
  );
};

export { ThemeMenu, VersionSelect };
