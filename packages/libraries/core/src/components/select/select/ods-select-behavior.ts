import { OcdkSurface } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsSelectOptionClickEventDetail } from '../public-api';

export interface OdsSelectBehavior {
  el: HTMLStencilElement;
  surface: OcdkSurface | undefined;
  anchor: HTMLElement;

  syncReferences(): void;
  handleSelectClick(): void;
  handleValueChange(event: CustomEvent<OdsSelectOptionClickEventDetail>): void;
}