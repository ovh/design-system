import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsSwitchItemAttributes extends OdsComponentAttributes {
  /**
   * Its corresponding value
   */
  value: HTMLInputElement['value'];
  /**
   * Its corresponding id
   */
  id: HTMLInputElement['id'];
  /**
   * The checked status of the SwitchItem
   */
  checked: boolean
}
