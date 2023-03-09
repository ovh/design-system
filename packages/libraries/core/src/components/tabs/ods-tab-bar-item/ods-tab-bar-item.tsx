import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponent } from '../../ods-component';
import { OdsTabBarItemMethods } from './ods-tab-bar-item-methods';
import { OdsTabBarItemEvents } from './ods-tab-bar-item-events';
import { OdsTabBarItemController } from './ods-tab-bar-item-controller';
import { OdsTabBarItemAttributes } from './ods-tab-bar-item-attributes';
import { OdsTabBarItemBehavior } from './ods-tab-bar-item-behavior';

/**
 * interface description ofe all implementation of `ods-tab-bar-item`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsTabBarItem<ComponentMethods extends OdsComponentGenericMethods<OdsTabBarItemMethods> = OdsComponentGenericMethods<OdsTabBarItemMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsTabBarItemEvents> = OdsComponentGenericEvents<OdsTabBarItemEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsTabBarItemAttributes, OdsTabBarItemController, OdsTabBarItemBehavior>;
