import { OdsAccordion } from "./ods-accordion";
import { OdsAccordionController } from "./ods-accordion-controller";
import { OdsAccordionEvents } from "./ods-accordion-events";
import { OdsAccordionGroup } from '../accordion-group/ods-accordion-group';
import { OdsAccordionMethods } from "./ods-accordion-methods";
import { OdsAccordionSize } from "./ods-accordion-size";
import { OdsThemeColorIntent } from "@ovhcloud/ods-theming";

/**
 * Mocked generic implementation that represents an `OdsAccordion`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsAccordionMock implements OdsAccordion<OdsAccordionMethods, OdsAccordionEvents> {
  el!: HTMLElement;
  accordionGroup: (HTMLElement & OdsAccordionGroup) | null = null;
  color?: OdsThemeColorIntent;
  contrasted?: boolean;
  size?: OdsAccordionSize;
  opened = false;
  disabled?: boolean;

  controller: OdsAccordionController = jest.fn() as unknown as OdsAccordionController;
  detailsEl?: HTMLDetailsElement;

  odsAccordionToggle!: boolean;
  emitToggle = jest.fn();
  afterInit = jest.fn();
  beforeInit = jest.fn();
  onDestroy = jest.fn();
}
