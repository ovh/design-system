import { OdsSwitchAttributes } from './ods-switch-attributes';
import { OdsSwitchController } from './ods-switch-controller';
import { OdsSwitchEvents } from './ods-switch-events';
import { OdsSwitchMethods } from './ods-switch-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-switch`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsSwitch<ComponentMethods extends OdsComponentGenericMethods<OdsSwitchMethods> = OdsComponentGenericMethods<OdsSwitchMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsSwitchEvents> = OdsComponentGenericEvents<OdsSwitchEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsSwitchAttributes, OdsSwitchController>;
