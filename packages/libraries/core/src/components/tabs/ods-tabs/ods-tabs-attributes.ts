import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsTabsSize, } from './ods-tabs-size';

export interface OdsTabsAttributes extends OdsComponentAttributes {
  /**
   * Tabs size
   */
  size?: OdsTabsSize
  /**
   * Tabs default panel
   */
  panelActive?: string
  /**
   * Tabs id
   */
  tabsId?: string
}
