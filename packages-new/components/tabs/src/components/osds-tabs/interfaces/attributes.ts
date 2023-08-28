import type { ODS_TABS_SIZE } from '../constants/tabs-size';

interface OdsTabsAttribute {
  /**
     * The tab is contrasted
     */
  contrasted: boolean;
  /**
   * Tabs active panel
   */
  panel: string;
  /**
   * Tabs size
   */
  size: ODS_TABS_SIZE;
}

export {
  OdsTabsAttribute,
};
