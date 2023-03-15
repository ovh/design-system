import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsTabsSize, } from '../ods-tabs/ods-tabs-size';

export interface OdsTabBarItemAttributes extends OdsComponentAttributes {
  size?: OdsTabsSize
  /**
   * The panel of the corresponding Tab
   */
  panel?: string
  /**
   * The checked status of the tab
   */
  checked: boolean
  /**
   * The tab is disabled or not
   */
  disabled?: boolean | undefined
}
