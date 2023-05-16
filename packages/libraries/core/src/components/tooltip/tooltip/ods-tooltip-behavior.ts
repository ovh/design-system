import { OcdkSurface } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

export interface OdsTooltipBehavior {
  el: HTMLStencilElement;
  anchor: HTMLDivElement;
  surface: OcdkSurface | undefined;

  handleMouseEnter(): void;
  handleMouseLeave(): void;
  handleTriggerClick(): void;
  handleTriggerFocus(): void;
  checkForClickOutside(event: { target: HTMLElement }): void;
  syncReferences(): void;
}
