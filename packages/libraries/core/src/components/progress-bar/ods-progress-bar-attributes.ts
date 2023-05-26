import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsProgressBarAttributes extends OdsComponentAttributes {
  /**
   * Sets the maximum value the progress can reach
   */
  max?: string | number;
  /**
   * Sets the minimum value the progress can reach
   */
  min?: string | number;
  /**
   * The value of the progress bar. If set to indeterminate, the progress bar will animate indefinitely
   */
  progress?: string | number;
}
