import { OdsComponentMethods } from '../../ods-component-methods';

export interface OdsTooltipMethods extends OdsComponentMethods {
  /**
   * Close the surface
   */
  closeSurface() : void;

  /**
   * set tab index on the component
   */
  setTabindex(value: number): void;
}
