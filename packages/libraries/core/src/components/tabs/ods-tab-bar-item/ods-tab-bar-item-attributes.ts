import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsTabsSize, } from '../ods-tabs/ods-tabs-size';

export interface OdsTabBarItemAttributes extends OdsComponentAttributes {
  size?: OdsTabsSize
  /**
   * The slots of the corresponding Tab
   */
  slots?: string
}
