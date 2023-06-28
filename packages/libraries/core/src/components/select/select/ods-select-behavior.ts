import { OcdkSurface } from '@ovhcloud/ods-cdk';
import { OdsSelectOptionClickEventDetail } from '../public-api';

export interface OdsSelectBehavior {
  el: HTMLElement;
  surface: OcdkSurface | undefined;
  anchor: HTMLElement;

  syncReferences(): void;
  handleSelectClick(): void;
  handleValueChange(event: CustomEvent<OdsSelectOptionClickEventDetail>): void;
}