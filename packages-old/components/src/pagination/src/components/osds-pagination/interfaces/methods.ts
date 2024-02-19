interface OdsPaginationMethod {
  /**
   * set page index on the component
   */
  setPageIndex(value: number): Promise<void>;
}

export type {
  OdsPaginationMethod,
};
