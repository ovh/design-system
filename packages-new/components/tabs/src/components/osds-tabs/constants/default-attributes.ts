import type { OdsTabsAttribute } from '../interfaces/attributes';
import { ODS_TABS_SIZE } from './tabs-size';

const DEFAULT_ATTRIBUTE: OdsTabsAttribute = Object.freeze({
  contrasted: false,
  panel: '',
  size: ODS_TABS_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};
