import { OdsSwitchItemAttributes } from './ods-switch-item-attributes';
import { OdsSwitchItemController } from './ods-switch-item-controller';
import { OdsSwitchItemEvents } from './ods-switch-item-events';
import { OdsSwitchItemMethods } from './ods-switch-item-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-switch`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsSwitchItem<ComponentMethods extends OdsComponentGenericMethods<OdsSwitchItemMethods> = OdsComponentGenericMethods<OdsSwitchItemMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsSwitchItemEvents> = OdsComponentGenericEvents<OdsSwitchItemEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsSwitchItemAttributes, OdsSwitchItemController>;
