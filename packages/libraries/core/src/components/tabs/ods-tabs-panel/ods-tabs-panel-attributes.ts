import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsTabsSize, } from '../ods-tabs-size';

export interface OdsTabsPanelAttributes extends OdsComponentAttributes {
  size?: OdsTabsSize
  /**
   * The value of the corresponding Tab. Must use the index of the Tab when no value was passed to Tab.
   */
  value?: string | number
  /**
   * 	The content of the component.
   */
  child?: Node
  /**
   * 	Override or extend the styles applied to the component
   */
  classes?: object
}
