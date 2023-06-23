import { OdsCollapsible } from "./ods-collapsible";
import { OdsCollapsibleController } from "./ods-collapsible-controller";
import { OdsCollapsibleEvents } from "./ods-collapsible-events";
import { OdsCollapsibleMethods } from "./ods-collapsible-methods";

/**
 * Mocked generic implementation that represents an `OdsCollapsible`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsCollapsibleMock implements OdsCollapsible<OdsCollapsibleMethods, OdsCollapsibleEvents> {
  el!: HTMLElement;
  opened = false;

  controller: OdsCollapsibleController = jest.fn() as unknown as OdsCollapsibleController;

  odsCollapsibleToggle!: boolean;
  emitToggle = jest.fn();
}
