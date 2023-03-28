import { OdsComponentController } from '../../ods-component-controller';
/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTabBarItemController extends OdsComponentController {
  constructor(component) {
    super(component);
  }
  /**
   *
   * @param event
  */
  async handlePanelKeyEvent(event, panel) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      this.component.setPanelName(panel);
      //event.defaultPrevented();
      event.preventDefault();
    }
  }
  afterInit() { }
}
