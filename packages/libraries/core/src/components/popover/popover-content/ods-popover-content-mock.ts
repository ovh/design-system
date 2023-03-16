import { OdsPopoverContent } from "./ods-popover-content";
import { OdsPopoverContentController } from "./ods-popover-content-controller";
import { OdsPopoverContentEvents } from "./ods-popover-content-events";
import { OdsPopoverContentMethods } from "./ods-popover-content-methods";
import { HTMLStencilElement } from '@stencil/core/internal';

/**
 * Mocked generic implementation that represents an `OdsPopover`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsPopoverContentMock implements OdsPopoverContent<OdsPopoverContentMethods, OdsPopoverContentEvents> {
  controller: OdsPopoverContentController = jest.fn() as unknown as OdsPopoverContentController;
  el!: HTMLStencilElement;
}
