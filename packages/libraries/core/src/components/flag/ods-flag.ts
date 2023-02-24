import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsFlagAttributes } from './ods-flag-attributes';
import { OdsFlagBehavior } from './ods-flag-behavior';
import { OdsFlagController } from './ods-flag-controller';
import { OdsFlagEvents } from './ods-flag-events';
import { OdsFlagMethods } from './ods-flag-methods';

/**
 * interface description of all implementation of `ods-flag`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsFlag<ComponentMethods extends OdsComponentGenericMethods<OdsFlagMethods> = OdsComponentGenericMethods<OdsFlagMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsFlagEvents> = OdsComponentGenericEvents<OdsFlagEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsFlagAttributes, OdsFlagController, OdsFlagBehavior>;
