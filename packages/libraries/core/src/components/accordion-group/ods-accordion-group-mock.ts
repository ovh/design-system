import { OdsAccordionGroup } from "./ods-accordion-group";
import { OdsAccordionGroupController } from "./ods-accordion-group-controller";
import { OdsAccordionGroupEvents } from "./ods-accordion-group-events";
import { OdsAccordionGroupMethods } from "./ods-accordion-group-methods";

/**
 * Mocked generic implementation that represents an `OdsAccordionGroup`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsAccordionGroupMock implements OdsAccordionGroup<OdsAccordionGroupMethods, OdsAccordionGroupEvents> {
    accordions = [];
    accordionGroupId?: string;

    controller: OdsAccordionGroupController = jest.fn() as unknown as OdsAccordionGroupController;
    el!: HTMLElement;

    registerAccordion = jest.fn();
    unRegisterAccordion = jest.fn();
    beforeInit = jest.fn();
    onDestroy = jest.fn();
  }
