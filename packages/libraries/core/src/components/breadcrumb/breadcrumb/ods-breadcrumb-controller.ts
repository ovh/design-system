import { OdsBreadcrumb } from './ods-breadcrumb';
import { OdsComponentController } from '../../ods-component-controller';
import { OdsBreadcrumbItemAttributes } from '../breadcrumb-item/ods-breadcrumb-item-attributes';
import { OdsBreadcrumbAttributeItem } from './ods-breadcrumb-attributes';

const MAX_DISPLAYED_ITEMS = 4;

/**
 * common controller logic for component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsBreadcrumbController extends OdsComponentController<OdsBreadcrumb> {
  constructor(component: OdsBreadcrumb) {
    super(component);
  }

  getBreadcrumbItems(items: OdsBreadcrumbAttributeItem[], isCollapsed: boolean): OdsBreadcrumbItemAttributes[] {
    if (!items.length) {
      return [];
    }

    if (isCollapsed && items.length > MAX_DISPLAYED_ITEMS) {
      return items.map((item, index) => ({
        ...item,
        isCollapsed: index >= 1 && index < (items.length - 1),
        isExpandableItem: index === 1,
        isLast: index === (items.length - 1),
      } as OdsBreadcrumbItemAttributes));
    }

    return items.map((item, index) => ({
      ...item,
      isCollapsed: false,
      isExpandableItem: false,
      isLast: index === (items.length - 1),
    } as OdsBreadcrumbItemAttributes));
  }
}
