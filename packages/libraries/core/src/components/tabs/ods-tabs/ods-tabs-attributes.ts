import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsTabsSize, } from './ods-tabs-size';

export interface OdsTabsAttributes extends OdsComponentAttributes {
  /**
   * Tabs size
   */
  size: OdsTabsSize;
  /**
   * Tabs active panel
   */
  panel: string;
  /**
   * The tab is contrasted
   */
  contrasted: boolean;
}
