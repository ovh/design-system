import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsTabsSize, } from './ods-tabs-size';

// interface TabItemType {
//   /**
//    * Display tab text
//    */
//   label: Node;
//   /**
//    * Display tab content
//    */
//   children: Node;
//   /**
//    * Key unique
//    */
//   key: string;
//   /**
//    * Tab disabled
//    */
//   disabled: boolean;
//   /**
//    * Forced render of content in tabs, not lazy render after clicking on tabs
//    */
//   forceRender: boolean;
// }

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
}
