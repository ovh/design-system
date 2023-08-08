import { OdsComponent } from './ods-component';

/**
 * common controller of a component.
 * it contains common logic useful for all components
 */
export abstract class OdsComponentController<Component extends OdsComponent> {
  protected component: Component;

  protected constructor(component: Component) {
    this.component = component;
  }
}
