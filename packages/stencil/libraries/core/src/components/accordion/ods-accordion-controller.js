import { OdsComponentController } from '../ods-component-controller';
/**
 * common controller logic for accordion component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsAccordionController extends OdsComponentController {
  constructor(component) {
    super(component);
  }
  /**
   * synchronize the `opened` status from this component to the vanilla `details` html tag
   */
  syncOpenedOnDetail() {
    var _a, _b;
    if (this.component.opened) {
      (_a = this.component.detailsEl) === null || _a === void 0 ? void 0 : _a.setAttribute('open', '');
    }
    else {
      (_b = this.component.detailsEl) === null || _b === void 0 ? void 0 : _b.removeAttribute('open');
    }
  }
  /**
   * handle on toggle the `details` vanilla tag by synchronizing its `open` status into our `opened` one.
   * in case of no `details` already set, it won't change the `opened` status.
   */
  onToggle() {
    this.component.opened = this.component.detailsEl ? this.component.detailsEl.open : this.component.opened;
    this.component.emitToggle(this.component.opened || false);
  }
  beforeInit() {
    const accordionGroup = this.component.accordionGroup = this.component.el.closest('osds-accordion-group');
    if (accordionGroup) {
      accordionGroup.registerAccordion(this.component.el);
    }
  }
  onDestroy() {
    const accordionGroup = this.component.accordionGroup;
    if (accordionGroup) {
      accordionGroup.unRegisterAccordion(this.component.el);
    }
  }
}
