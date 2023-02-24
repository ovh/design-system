import { OdsAccordion } from './ods-accordion';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for accordion component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsAccordionController extends OdsComponentController<OdsAccordion> {

  constructor(component: OdsAccordion) {
    super(component);
  }

  /**
   * synchronize the `opened` status from this component to the vanilla `details` html tag
   */
   syncOpenedOnDetail(): void {
    if (this.component.opened) {
      this.component.detailsEl?.setAttribute('open', '');
    } else {
      this.component.detailsEl?.removeAttribute('open');
    }
  }

  /**
   * handle on toggle the `details` vanilla tag by synchronizing its `open` status into our `opened` one.
   * in case of no `details` already set, it won't change the `opened` status.
   */
  onToggle(): void {
    this.component.opened = this.component.detailsEl ? this.component.detailsEl.open : this.component.opened;
    this.component.emitToggle(this.component.opened || false);
  }

  beforeInit<T extends OdsAccordion>(): void {
    const accordionGroup = this.component.accordionGroup = this.component.el.closest('osds-accordion-group');
    if (accordionGroup) {
      accordionGroup.registerAccordion(this.component.el as unknown as (HTMLElement & T));
    }
  }

  onDestroy<T extends OdsAccordion>(): void {
    const accordionGroup = this.component.accordionGroup;
    if (accordionGroup) {
      accordionGroup.unRegisterAccordion(this.component.el as unknown as (HTMLElement & T))
    }
  }
}
