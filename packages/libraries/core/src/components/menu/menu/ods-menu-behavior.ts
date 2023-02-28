import { OcdkSurface } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

export interface OdsMenuBehavior {
  el: HTMLStencilElement;
  title: HTMLElement | null;
  anchor: HTMLDivElement;
  surface: OcdkSurface | undefined;

  propagateDisabledToChild(disabled: boolean | undefined): void;
  handleTriggerClick(): void;
  handleTriggerKey(event: KeyboardEvent): void;
  handleSurfaceKey(event: KeyboardEvent): void;
  checkForClickOutside(event:any): void;
  syncReferences(): void;
  afterInit(): void;
}
