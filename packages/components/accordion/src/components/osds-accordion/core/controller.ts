import { HTMLStencilElement } from '@stencil/core/internal';

import { OsdsAccordionGroup } from '../../osds-accordion-group/osds-accordion-group';
import type { OsdsAccordion } from '../osds-accordion';

class OdsAccordionController {
  private component: OsdsAccordion;

  constructor(component: OsdsAccordion) {
    this.component = component;
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
    this.component.opened = this.component.detailsEl ? this.component.detailsEl.getAttribute('open') === '' : this.component.opened;
    this.component.emitToggle(this.component.opened || false);
  }

  beforeInit(): void {
    const accordionGroup = this.component.accordionGroup = this.component.el.closest('osds-accordion-group') as unknown as (HTMLStencilElement & OsdsAccordionGroup);
    if (accordionGroup) {
      accordionGroup.registerAccordion(this.component);
    }
  }

  onDestroy(): void {
    const accordionGroup = this.component.accordionGroup;
    if (accordionGroup) {
      accordionGroup.unRegisterAccordion(this.component);
    }
  }
}

export {
  OdsAccordionController,
};
