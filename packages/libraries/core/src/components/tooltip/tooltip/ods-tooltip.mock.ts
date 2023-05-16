import { OdsTooltip } from './ods-tooltip';
import { OdsTooltipController } from './ods-tooltip-controller';
import { OdsTooltipEvents } from './ods-tooltip-events';
import { OdsTooltipMethods } from './ods-tooltip-methods';
import { OcdkSurface } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

/**
 * Mocked generic implementation that represents an `OdsTooltip`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsTooltipMock implements OdsTooltip<OdsTooltipMethods, OdsTooltipEvents> {
  anchor!: HTMLDivElement;
  controller: OdsTooltipController = jest.fn() as unknown as OdsTooltipController;
  el!: HTMLStencilElement;
  surface: OcdkSurface | undefined = undefined;

  handleMouseEnter = jest.fn();
  handleMouseLeave = jest.fn();
  handleTriggerClick = jest.fn();
  handleTriggerFocus = jest.fn();
  checkForClickOutside = jest.fn();
  syncReferences = jest.fn();

  closeSurface = jest.fn();
}
