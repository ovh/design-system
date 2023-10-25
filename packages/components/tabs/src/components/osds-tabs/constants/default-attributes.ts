import { ODS_TABS_SIZE } from './tabs-size';
import type { OdsTabsAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsTabsAttribute = Object.freeze({
  contrasted: false,
  panel: '',
  size: ODS_TABS_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};
