interface OdsModalMethod {
  /**
   * close && set display none to the modal
   */
  close(): Promise<void>;

  /**
   * open && display the modal
   */
  open(): Promise<void>;
}

export {
  OdsModalMethod,
};
