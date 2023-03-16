import { OcdkSurface } from '../../../../../cdk/src/index';
import { HTMLStencilElement } from '@stencil/core/internal';

export interface OdsPopoverBehavior {
  el: HTMLStencilElement;
  title: HTMLElement | null;
  anchor: HTMLDivElement;
  surface: OcdkSurface | undefined;

  handleTriggerClick(): void;
  handleTriggerKey(event: KeyboardEvent): void;
  handleSurfaceKey(event: KeyboardEvent): void;
  checkForClickOutside(event:any): void;
  syncReferences(): void;
}
