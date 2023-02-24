import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsRadioButtonMethods } from './ods-radio-button-methods';
import { OdsRadioButtonEvents } from './ods-radio-button-events';
import { OdsRadioButtonAttributes } from './ods-radio-button-attributes';
import { OdsRadioButtonController } from './ods-radio-button-controller';

/**
 * interface description of all implementation of `ods-radio-button`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsRadioButton<ComponentMethods extends OdsComponentGenericMethods<OdsRadioButtonMethods> = OdsComponentGenericMethods<OdsRadioButtonMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsRadioButtonEvents> = OdsComponentGenericEvents<OdsRadioButtonEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsRadioButtonAttributes, OdsRadioButtonController>;
