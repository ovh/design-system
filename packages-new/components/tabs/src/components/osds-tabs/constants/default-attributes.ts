import type { OdsTabsAttribute } from '../interfaces/attributes';
import { ODS_TABS_SIZE } from './tabs-size';

const DEFAULT_ATTRIBUTE: OdsTabsAttribute = Object.freeze({
  contrasted: false,
  size: ODS_TABS_SIZE.md,
  panel: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
