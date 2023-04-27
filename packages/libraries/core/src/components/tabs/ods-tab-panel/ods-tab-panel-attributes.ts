import { OdsComponentAttributes } from '../../ods-component-attributes';

export interface OdsTabPanelAttributes extends OdsComponentAttributes {
  /**
   *  is the panel is active or nor
   */
  active: boolean;
  /**
   * identifier name of the panel
   */
  name: string;
}
