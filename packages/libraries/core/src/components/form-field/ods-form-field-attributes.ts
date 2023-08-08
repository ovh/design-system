import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsFormFieldAttributes extends OdsComponentAttributes {
  /**
   * Indicates if the Form Field shows error or not
   */
  error?: string;
  /**
   * Indicates if the Form Field is full width or not: see component principles
   */
  flex?: boolean;
}
