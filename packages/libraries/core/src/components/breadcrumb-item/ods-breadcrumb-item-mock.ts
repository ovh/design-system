import { OdsBreadcrumbItem } from './ods-breadcrumb-item';
import { OdsBreadcrumbItemController } from './ods-breadcrumb-item-controller';
import { OdsBreadcrumbItemEvents } from './ods-breadcrumb-item-events';
import { OdsBreadcrumbItemMethods } from './ods-breadcrumb-item-methods';
import { OdsBreadcrumbItemReferrerpolicy } from './ods-breadcrumb-item-referrerpolicy';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

export class OdsBreadcrumbItemMock implements OdsBreadcrumbItem<OdsBreadcrumbItemMethods, OdsBreadcrumbItemEvents> {
  color?: OdsThemeColorIntent;
  contrasted?: boolean;
  disabled?: boolean;
  active?: boolean;
  download?: string;
  referrerpolicy?: OdsBreadcrumbItemReferrerpolicy;
  rel?: OdsHTMLAnchorElementRel;
  target?: OdsHTMLAnchorElementTarget;
  type?: string;
  href = '';

  beforeRender = jest.fn();

  controller: OdsBreadcrumbItemController = jest.fn() as unknown as OdsBreadcrumbItemController;
}
