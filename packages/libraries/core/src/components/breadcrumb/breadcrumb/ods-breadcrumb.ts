import { OdsBreadcrumbAttributes } from './ods-breadcrumb-attributes';
import { OdsBreadcrumbController } from './ods-breadcrumb-controller';
import { OdsBreadcrumbEvents } from './ods-breadcrumb-events';
import { OdsBreadcrumbMethods } from './ods-breadcrumb-methods';
import { OdsComponent } from '../../ods-component';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-breadcrumb`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsBreadcrumb<
  ComponentMethods extends OdsComponentGenericMethods<OdsBreadcrumbMethods> = OdsComponentGenericMethods<OdsBreadcrumbMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsBreadcrumbEvents> = OdsComponentGenericEvents<OdsBreadcrumbEvents>,
> = OdsComponent<ComponentMethods, ComponentEvents, OdsBreadcrumbAttributes, OdsBreadcrumbController>;
