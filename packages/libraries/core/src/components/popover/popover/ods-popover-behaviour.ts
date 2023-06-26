import { OcdkSurface } from '@ovhcloud/ods-cdk';

export interface OdsPopoverBehaviour {
  el: HTMLElement;
  title: HTMLElement | null;
  surface: OcdkSurface | undefined;
  anchor: HTMLElement;

  checkForClickOutside(event:any): void;
  handleSurfaceKey(event: KeyboardEvent): void;
  handleTriggerClick(): void;
  handleTriggerKey(event: KeyboardEvent): void;
  syncReferences(): void;
}
