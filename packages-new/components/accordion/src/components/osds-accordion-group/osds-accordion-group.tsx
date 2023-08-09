import type { HTMLStencilElement } from "@stencil/core/internal";
import type { OsdsAccordion } from "../osds-accordion/osds-accordion";
import type { OdsAccordionGroupMethod } from "./interfaces/methods";
import { Component, Element, Host, Method, h } from "@stencil/core";
import { OdsAccordionGroupController } from "./core/controller";

@Component({
  tag: 'osds-accordion-group',
  shadow: true,
})
export class OsdsAccordionGroup implements OdsAccordionGroupMethod {

  accordions: (OsdsAccordion)[] = [];
  controller: OdsAccordionGroupController = new OdsAccordionGroupController(this);
  private static accordionGroupIds = 0;
  accordionGroupId = `ods-accordion-group-${OsdsAccordionGroup.accordionGroupIds++}`;

  @Element() el!: HTMLStencilElement;

  /** @see OdsAccordionGroupMethod.registerAccordion */
  @Method()
  async registerAccordion(accordion: OsdsAccordion) {
    this.controller.registerAccordion(accordion);
  }

  /** @see OdsAccordionGroupMethod.unRegisterAccordion */
  @Method()
  async unRegisterAccordion(accordion: OsdsAccordion) {
    this.controller.unRegisterAccordion(accordion);
  }

  beforeInit(): void {
    this.controller.beforeInit<OsdsAccordion>()
  }

  onDestroy(): void {
    this.controller.onDestroy();
  }

  connectedCallback(): void {
    this.beforeInit();
  }

  disconnectedCallback(): void {
    this.onDestroy();
  }

  render() {
    return (
      <Host {...{
        role: 'tablist'
      }}>
        <slot></slot>
      </Host>
    )
  }
}
