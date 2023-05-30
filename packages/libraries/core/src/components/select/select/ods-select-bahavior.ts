import { OcdkSurface } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

export interface OdsSelectBehavior {
  el: HTMLStencilElement;
  surface: OcdkSurface | undefined;
  anchor: HTMLElement;

  syncReferences(): void;
}