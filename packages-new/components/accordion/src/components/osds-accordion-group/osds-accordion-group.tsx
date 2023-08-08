import { Component, Element, Host, Method, h } from "@stencil/core";
import { HTMLStencilElement } from "@stencil/core/internal";
import { OsdsAccordion } from "../osds-accordion/osds-accordion";
import { OdsAccordionGroupController } from "./core/controller";
import { OdsAccordionGroupMethods } from "./interfaces/methods";

@Component({
  tag: 'osds-accordion-group',
  shadow: true,
})
export class OsdsAccordionGroup implements OdsAccordionGroupMethods {

  accordions: (OsdsAccordion)[] = [];
  controller: OdsAccordionGroupController = new OdsAccordionGroupController(this);
  private static accordionGroupIds = 0;
  accordionGroupId = `ods-accordion-group-${OsdsAccordionGroup.accordionGroupIds++}`;

  @Element() el!: HTMLStencilElement;

  /** @see OdsAccordionGroupMethods.registerAccordion */
  @Method()
  async registerAccordion(accordion: OsdsAccordion) {
    this.controller.registerAccordion(accordion);
  }

  /** @see OdsAccordionGroupMethods.unRegisterAccordion */
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
