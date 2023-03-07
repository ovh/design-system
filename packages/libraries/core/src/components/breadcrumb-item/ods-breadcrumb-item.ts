import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsBreadcrumbItemAttributes } from './ods-breadcrumb-item-attributes';
import { OdsBreadcrumbItemBehavior } from './ods-breadcrumb-item-behavior';
import { OdsBreadcrumbItemController } from './ods-breadcrumb-item-controller';
import { OdsBreadcrumbItemEvents } from './ods-breadcrumb-item-events';
import { OdsBreadcrumbItemMethods } from './ods-breadcrumb-item-methods';

/**
 * interface description of all implementation of `ods-breadcrumb-item`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsBreadcrumbItem<
  ComponentMethods extends OdsComponentGenericMethods<OdsBreadcrumbItemMethods> = OdsComponentGenericMethods<OdsBreadcrumbItemMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsBreadcrumbItemEvents> = OdsComponentGenericEvents<OdsBreadcrumbItemEvents>,
> = OdsComponent<ComponentMethods, ComponentEvents, OdsBreadcrumbItemAttributes, OdsBreadcrumbItemController, OdsBreadcrumbItemBehavior>;
