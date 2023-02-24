import { OdsLink } from './ods-link';
import { OdsLinkController } from './ods-link-controller';
import { OdsLinkEvents } from './ods-link-events';
import { OdsLinkMethods } from './ods-link-methods';
import { OdsLinkReferrerpolicy } from './ods-link-referrerpolicy';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

export class OdsLinkMock implements OdsLink<OdsLinkMethods, OdsLinkEvents> {
  color?: OdsThemeColorIntent;
  contrasted?: boolean;
  disabled?: boolean;
  download?: string;
  referrerpolicy?: OdsLinkReferrerpolicy;
  rel?: OdsHTMLAnchorElementRel;
  target?: OdsHTMLAnchorElementTarget;
  type?: string;
  href = '';

  beforeRender = jest.fn();

  controller: OdsLinkController = jest.fn() as unknown as OdsLinkController;
}
