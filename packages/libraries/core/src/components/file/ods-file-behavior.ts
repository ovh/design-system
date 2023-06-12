export interface OdsFileBehavior {
  /**
   * state to indicate if the file is being dragged over the component
   */
  dragOver: boolean;

  /**
   * state to indicate is a file is errored
   */
  isErrored: boolean;

  /**
   * state to indicate if all files are uploaded successfully
   */
  isSuccessful: boolean;

  /**
   * reference to the dropzone element
   */
  dropzoneRef: HTMLElement;
}
