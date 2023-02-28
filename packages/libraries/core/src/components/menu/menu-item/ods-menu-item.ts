import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponent } from '../../ods-component';
import { OdsMenuItemMethods } from './ods-menu-item-methods';
import { OdsMenuItemEvents } from './ods-menu-item-events';
import { OdsMenuItemController } from './ods-menu-item-controller';
import { OdsMenuItemAttributes } from './ods-menu-item-attributes';

/**
 * interface description of all implementation of `ods-menu-item`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsMenuItem<ComponentMethods extends OdsComponentGenericMethods<OdsMenuItemMethods> = OdsComponentGenericMethods<OdsMenuItemMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsMenuItemEvents> = OdsComponentGenericEvents<OdsMenuItemEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents,OdsMenuItemAttributes, OdsMenuItemController>;
