import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsProgressBarAttributes extends OdsComponentAttributes {
  /**
   * Sets the maximum value the progress can reach
   */
  max?: string | number;
  /**
   * The value of the progress bar
   */
  value?: string | number;
}
