import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsTabsSize, } from './ods-tabs-size';

export interface OdsTabsAttributes extends OdsComponentAttributes {
  /**
   * Current TabPane's key
   */
  activeKey?: string | number
  /**
   * Centers tabs
   */
  center?: boolean
  /**
   * Initial active TabPane's key, if activeKey is not set
   */
  defaultActiveKey?: string
  /**
   * Text hue
   */
  items?: any
  /**
   * Tabs size
   */
  size?: OdsTabsSize
  /**
   * Tabs default panel
   */
  panelActive?: string
  tabsId?: string
}
