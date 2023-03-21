import { OdsPopover } from "./ods-popover";
import { OdsPopoverController } from "./ods-popover-controller";
import { OdsPopoverEvents } from "./ods-popover-events";
import { OdsPopoverMethods } from "./ods-popover-methods";
import { OcdkSurface } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

/**
 * Mocked generic implementation that represents an `OdsPopover`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsPopoverMock implements OdsPopover<OdsPopoverMethods, OdsPopoverEvents> {
  controller: OdsPopoverController = jest.fn() as unknown as OdsPopoverController;
  el!: HTMLStencilElement;

  title: HTMLElement | null = null;
  anchor!: HTMLDivElement;
  surface: OcdkSurface | undefined = undefined;

  handleTriggerClick = jest.fn();
  handleTriggerKey = jest.fn();
  handleSurfaceKey = jest.fn();
  checkForClickOutside = jest.fn();
  syncReferences = jest.fn();

  closeSurface = jest.fn();
}
