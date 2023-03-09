import { OdsComponentMethods } from '../../ods-component-methods';

export interface OdsTabBarItemMethods extends OdsComponentMethods {
  /**
   * Set the tab index.
   * @internal
   * @param name - name
   */
  setPanelName(name: string): void
}
