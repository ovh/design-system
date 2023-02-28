import { OdsMenu } from "./ods-menu";
import { OdsMenuController } from "./ods-menu-controller";
import { OdsMenuEvents } from "./ods-menu-events";
import { OdsMenuMethods } from "./ods-menu-methods";
import { OcdkSurface } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

/**
 * Mocked generic implementation that represents an `OdsMenu`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsMenuMock implements OdsMenu<OdsMenuMethods, OdsMenuEvents> {
  controller: OdsMenuController = jest.fn() as unknown as OdsMenuController;
  el!: HTMLStencilElement;

  title: HTMLElement | null = null;
  anchor!: HTMLDivElement;
  surface: OcdkSurface | undefined = undefined;
  disabled = false;

  afterInit = jest.fn();
  propagateDisabledToChild = jest.fn();
  handleTriggerClick = jest.fn();
  handleTriggerKey = jest.fn();
  handleSurfaceKey = jest.fn();
  checkForClickOutside = jest.fn();
  syncReferences = jest.fn();
}
