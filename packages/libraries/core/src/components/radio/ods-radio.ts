import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsRadioAttributes } from './ods-radio-attributes';
import { OdsRadioBehavior } from './ods-radio-behavior';
import { OdsRadioController } from './ods-radio-controller';
import { OdsRadioEvents } from './ods-radio-events';
import { OdsRadioMethods } from './ods-radio-methods';

/**
 * interface description of all implementation of `ods-radio`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsRadio<ComponentMethods extends OdsComponentGenericMethods<OdsRadioMethods> = OdsComponentGenericMethods<OdsRadioMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsRadioEvents> = OdsComponentGenericEvents<OdsRadioEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsRadioAttributes, OdsRadioController, OdsRadioBehavior>;
