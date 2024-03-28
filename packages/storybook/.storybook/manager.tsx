import { addons } from '@storybook/manager-api';
import theme from './ods.theme';

const enableShortcuts = false;

addons.setConfig({
  theme,
  enableShortcuts,
  sidebar: {
    filters: {
      patterns: (item) => {
        return !item.tags.includes('isHidden');
      }
    }
  }
});
