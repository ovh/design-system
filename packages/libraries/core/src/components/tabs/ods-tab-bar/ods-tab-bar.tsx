import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponent } from '../../ods-component';
import { OdsTabBarMethods } from './ods-tab-bar-methods';
import { OdsTabBarEvents } from './ods-tab-bar-events';
import { OdsTabBarController } from './ods-tab-bar-controller';
import { OdsTabBarAttributes } from './ods-tab-bar-attributes';
import { OdsTabBarBehavior } from './ods-tab-bar-behavior';

/**
 * interface description ofe all implementation of `ods-tabs`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsTabBar<ComponentMethods extends OdsComponentGenericMethods<OdsTabBarMethods> = OdsComponentGenericMethods<OdsTabBarMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsTabBarEvents> = OdsComponentGenericEvents<OdsTabBarEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsTabBarAttributes, OdsTabBarController, OdsTabBarBehavior>;
