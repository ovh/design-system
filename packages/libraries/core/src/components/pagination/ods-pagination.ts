import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsPaginationMethods } from './ods-pagination-methods';
import { OdsPaginationEvents } from './ods-pagination-events';
import { OdsPaginationAttributes } from './ods-pagination-attributes';
import { OdsPaginationController } from './ods-pagination-controller';

/**
 * interface description of all implementation of `ods-pagination`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsPagination<
  ComponentMethods extends OdsComponentGenericMethods<OdsPaginationMethods> = OdsComponentGenericMethods<OdsPaginationMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsPaginationEvents> = OdsComponentGenericEvents<OdsPaginationEvents>,
> = OdsComponent<ComponentMethods, ComponentEvents, OdsPaginationAttributes, OdsPaginationController>;
