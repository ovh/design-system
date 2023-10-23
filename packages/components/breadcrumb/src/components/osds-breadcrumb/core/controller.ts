import type {OdsBreadcrumbAttributeItem} from '../interfaces/attributes';
import type {OdsBreadcrumbItemAttribute} from '../../osds-breadcrumb-item/interfaces/attributes';

const MAX_DISPLAYED_ITEMS = 4;

class OdsBreadcrumbController {
  getBreadcrumbItems(items: OdsBreadcrumbAttributeItem[], isCollapsed: boolean): OdsBreadcrumbItemAttribute[] {
    if (!items.length) {
      return [];
    }

    if (isCollapsed && items.length > MAX_DISPLAYED_ITEMS) {
      return items.map((item, index) => ({
        ...item,
        isCollapsed: index >= 1 && index < (items.length - 1),
        isExpandableItem: index === 1,
        isLast: index === (items.length - 1),
      }));
    }

    return items.map((item, index) => ({
      ...item,
      isCollapsed: false,
      isExpandableItem: false,
      isLast: index === (items.length - 1),
    }));
  }
}

export {
  OdsBreadcrumbController,
};
