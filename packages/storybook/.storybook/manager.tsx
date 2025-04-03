import { addons } from '@storybook/manager-api';
import { ADDON_NAME as GITHUB_LINK_ADDON_NAME, githubLinkAddon } from './addons/githubLink';
import { ADDON_NAME as ODS_VERSIONS_ADDON_NAME, odsVersionsAddon } from './addons/odsVersions';
import theme from './ods.theme';

addons.register(ODS_VERSIONS_ADDON_NAME, odsVersionsAddon);
addons.register(GITHUB_LINK_ADDON_NAME, githubLinkAddon);

addons.setConfig({
  theme,
  enableShortcuts: false,
  showToolbar: true,
});
