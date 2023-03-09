import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsTabsSize, } from '../ods-tabs/ods-tabs-size';

export interface OdsTabPanelAttributes extends OdsComponentAttributes {
  size?: OdsTabsSize
  /**
   * The name of the corresponding Tab. Must use the index of the Tab when no value was passed to Tab.
   */
  name?: string
  /**
   * 	The content of the component.
   */
  child?: Node
  /**
   * 	Override or extend the styles applied to the component
   */
  classes?: object
}
