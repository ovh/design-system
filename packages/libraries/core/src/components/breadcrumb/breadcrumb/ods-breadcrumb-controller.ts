import { OdsBreadcrumb } from './ods-breadcrumb';
import { OdsComponentController } from '../../ods-component-controller';
import { OdsBreadcrumbItemAttributes } from '../breadcrumb-item/ods-breadcrumb-item-attributes';

const MAX_DISPLAYED_ITEMS = 4;

/**
 * common controller logic for component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsBreadcrumbController extends OdsComponentController<OdsBreadcrumb> {
  constructor(component: OdsBreadcrumb) {
    super(component);
  }

  getBreadcrumbItems(isCollapsed: boolean): OdsBreadcrumbItemAttributes[] {
    if (!this.component.items.length) {
      return [];
    }

    if (isCollapsed && this.component.items.length > MAX_DISPLAYED_ITEMS) {
      return this.component.items.map((item, index) => ({
        ...item,
        isCollapsed: index >= 1 && index < (this.component.items.length - 1),
        isCollapsedItem: index === 1,
        isLast: index === (this.component.items.length - 1),
      } as OdsBreadcrumbItemAttributes));
    }

    return this.component.items.map((item, index) => ({
      ...item,
      isCollapsed: false,
      isCollapsedItem: false,
      isLast: index === (this.component.items.length - 1),
    } as OdsBreadcrumbItemAttributes));
  }
}
