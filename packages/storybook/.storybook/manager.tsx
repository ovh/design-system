import { addons } from '@storybook/manager-api';
import theme from './ods.theme';

const enableShortcuts = false;

addons.setConfig({
  theme,
  enableShortcuts,
});
