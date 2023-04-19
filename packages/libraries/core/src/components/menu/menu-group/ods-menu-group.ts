import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponent } from '../../ods-component';
import { OdsMenuGroupMethods } from './ods-menu-group-methods';
import { OdsMenuGroupEvents } from './ods-menu-group-events';
import { OdsMenuGroupController } from './ods-menu-group-controller';
import { OdsMenuGroupAttributes } from './ods-menu-group-attributes';

/**
 * interface description of all implementation of `ods-menu-group`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsMenuGroup<ComponentMethods extends OdsComponentGenericMethods<OdsMenuGroupMethods> = OdsComponentGenericMethods<OdsMenuGroupMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsMenuGroupEvents> = OdsComponentGenericEvents<OdsMenuGroupEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents,OdsMenuGroupAttributes, OdsMenuGroupController>;
