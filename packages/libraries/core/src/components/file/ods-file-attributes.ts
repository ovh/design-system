import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsFileI extends File {
  progress?: number;
  error?: boolean;
  id: number
}

export interface OdsFileAttributes extends OdsComponentAttributes {
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Success message
   */
  successMessage?: string;
  /**
   * Accepted types
   */
  acceptedTypes?: string
  /**
   * Files
   */
  files?: OdsFileI[] | [];
  /**
   * max file number
   */
  maxFiles?: number;
  /**
   * title
   */
  headerTitle?: string;
  /**
   * divider label
   */
  dividerLabel?: string;
  /**
   * select files label link
   */
  selectFilesLabel?: string;
}
