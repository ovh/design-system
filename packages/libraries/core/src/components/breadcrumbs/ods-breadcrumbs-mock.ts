import { OdsBreadcrumbs } from './ods-breadcrumbs';
import { OdsBreadcrumbsController } from './ods-breadcrumbs-controller';
import { OdsBreadcrumbsEvents } from './ods-breadcrumbs-events';
import { OdsBreadcrumbsMethods } from './ods-breadcrumbs-methods';
import { OdsBreadcrumbsReferrerpolicy } from './ods-breadcrumbs-referrerpolicy';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

export class OdsBreadcrumbsMock implements OdsBreadcrumbs<OdsBreadcrumbsMethods, OdsBreadcrumbsEvents> {
  color?: OdsThemeColorIntent;
  contrasted?: boolean;
  disabled?: boolean;
  active?: boolean;
  download?: string;
  referrerpolicy?: OdsBreadcrumbsReferrerpolicy;
  rel?: OdsHTMLAnchorElementRel;
  target?: OdsHTMLAnchorElementTarget;
  type?: string;
  href = '';

  beforeRender = jest.fn();

  controller: OdsBreadcrumbsController = jest.fn() as unknown as OdsBreadcrumbsController;
}
