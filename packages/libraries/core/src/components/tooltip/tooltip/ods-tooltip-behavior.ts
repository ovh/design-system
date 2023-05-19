import { OcdkSurface } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

export interface OdsTooltipBehavior {
  anchor: HTMLDivElement;
  el: HTMLStencilElement;
  surface: OcdkSurface | undefined;

  handleMouseEnter(): void;
  handleMouseLeave(): void;
  handleTriggerBlur(): void;
  handleTriggerClick(): void;
  handleTriggerFocus(): void;
  checkForClickOutside(event: { target: HTMLElement }): void;
  syncReferences(): void;
}
