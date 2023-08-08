import { OsdsAccordion } from "../osds-accordion";

export class OdsAccordionController {

  constructor(private component: OsdsAccordion) { }

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
    this.component.opened = this.component.detailsEl ? this.component.detailsEl.getAttribute('open') === '' : this.component.opened;
    this.component.emitToggle(this.component.opened || false);
  }

  beforeInit(): void {
    const accordionGroup = this.component.accordionGroup = this.component.el.closest('osds-accordion-group');
    if (accordionGroup) {
      accordionGroup.registerAccordion(this.component);
    }
  }

  onDestroy(): void {
    const accordionGroup = this.component.accordionGroup;
    if (accordionGroup) {
      accordionGroup.unRegisterAccordion(this.component)
    }
  }
}
