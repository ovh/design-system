interface OdsTooltipMethod {
  /**
   * Close the surface
   */
  closeSurface(): Promise<void>;

  /**
   * set tab index on the component
   */
  setTabindex(value: number): Promise<void>;
}

export {
  OdsTooltipMethod,
};
