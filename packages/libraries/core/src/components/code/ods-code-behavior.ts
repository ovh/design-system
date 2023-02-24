export interface OdsCodeBehavior {
  /**
   * reference to the vanilla code element.
   */
  codeEl: HTMLElement;

  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
   * before init component function.
   * should be called before component init.
   * should autocomplete the content with an ods-button and an ods-icon
   * @see ODSCodeController.autocompleteCopySlot
   */
  beforeInit(): void;

  /**
   * create an element that is an ods icon.
   * Used when the OdsCodeController need to automatically create an icon.
   * @see OdsCodeController.createCopyIcon
   */
  createCopyIconElement(): HTMLElement;

  /**
   * emit code copy
   */
  emitCopy(): void;

  /**
   * on click on the copy button, it should copy the content
   * by calling `controller.copyCode`
   * @see OdsCodeController.copyCode
   */
  onCopyClick(): void;
}
