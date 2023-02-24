import { Component, Element, Host, Method, h } from "@stencil/core";
import {
  OdsAccordion,
  OdsAccordionGroup,
  OdsAccordionGroupController,
  OdsAccordionGroupEvents,
  OdsAccordionGroupMethods,
} from "@ovhcloud/ods-core";
import { OdsStencilEvents, OdsStencilMethods } from "@ovhcloud/ods-stencil/libraries/stencil-core";
import { HTMLStencilElement } from "@stencil/core/internal";

type OsdsAccordionElement = HTMLElement & OdsAccordion;

/**
 * @slot (unnamed) - Accordion content
 */
@Component({
  tag: 'osds-accordion-group',
  shadow: true,
})
export class OsdsAccordionGroup implements OdsAccordionGroup<OdsStencilMethods<OdsAccordionGroupMethods>, OdsStencilEvents<OdsAccordionGroupEvents>> {

  accordions: (OsdsAccordionElement)[] = [];
  controller: OdsAccordionGroupController = new OdsAccordionGroupController(this);
  private static accordionGroupIds = 0;
  accordionGroupId = `ods-accordion-group-${OsdsAccordionGroup.accordionGroupIds++}`;

  @Element() el!: HTMLStencilElement;

  /** @see OdsAccordionGroupMethods.registerAccordion */
  @Method()
  async registerAccordion(accordion: HTMLElement & OdsAccordion) {
    this.controller.registerAccordion<OsdsAccordionElement>(accordion);
  }

  /** @see OdsAccordionGroupMethods.unRegisterAccordion */
  @Method()
  async unRegisterAccordion(accordion: HTMLElement & OdsAccordion) {
    this.controller.unRegisterAccordion<OsdsAccordionElement>(accordion);
  }

  beforeInit(): void {
    this.controller.beforeInit<OsdsAccordionElement>()
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
