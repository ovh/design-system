import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponent } from '../../ods-component';
import { OdsMenuMethods } from './ods-menu-methods';
import { OdsMenuEvents } from './ods-menu-events';
import { OdsMenuController } from './ods-menu-controller';
import { OdsMenuAttributes } from './ods-menu-attributes';
import { OdsMenuBehavior } from './ods-menu-behavior';

/**
 * interface description of all implementation of `ods-menu`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsMenu<ComponentMethods extends OdsComponentGenericMethods<OdsMenuMethods> = OdsComponentGenericMethods<OdsMenuMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsMenuEvents> = OdsComponentGenericEvents<OdsMenuEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsMenuAttributes, OdsMenuController, OdsMenuBehavior>;
