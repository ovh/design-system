interface OdsFileI extends File {
  error?: boolean;
  id: number;
  progress?: number;
}

interface OdsFileAttribute {
  /**
   * Accepted types
   */
  acceptedTypes?: string;
  /**
   * divider label
   */
  dividerLabel?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;  
  /**
   * Error message
   */
  errorMessage?: string;
  /**
  * Files
  */
  files?: OdsFileI[];
  /**
   * title
   */
  headerTitle?: string;
  /**
   * max file number
   */
  maxFiles?: number;  
  /**
   * select files label link
   */
  selectFilesLabel?: string;
  /**
   * Success message
   */
  successMessage?: string;
}

export {
  OdsFileAttribute,
  OdsFileI,
}