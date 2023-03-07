import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsBreadcrumbsAttributes } from './ods-breadcrumbs-attributes';
import { OdsBreadcrumbsBehavior } from './ods-breadcrumbs-behavior';
import { OdsBreadcrumbsController } from './ods-breadcrumbs-controller';
import { OdsBreadcrumbsEvents } from './ods-breadcrumbs-events';
import { OdsBreadcrumbsMethods } from './ods-breadcrumbs-methods';

/**
 * interface description of all implementation of `ods-breadcrumbs`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 **/

export type OdsBreadcrumbs<
  ComponentMethods extends OdsComponentGenericMethods<OdsBreadcrumbsMethods> = OdsComponentGenericMethods<OdsBreadcrumbsMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsBreadcrumbsEvents> = OdsComponentGenericEvents<OdsBreadcrumbsEvents>,
> = OdsComponent<ComponentMethods, ComponentEvents, OdsBreadcrumbsAttributes, OdsBreadcrumbsController, OdsBreadcrumbsBehavior>;
