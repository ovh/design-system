import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsCheckboxButtonMethods } from './ods-checkbox-button-methods';
import { OdsCheckboxButtonEvents } from './ods-checkbox-button-events';
import { OdsCheckboxButtonAttributes } from './ods-checkbox-button-attributes';
import { OdsCheckboxButtonController } from './ods-checkbox-button-controller';

/**
 * interface description of all implementation of `ods-checkbox-button`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCheckboxButton<ComponentMethods extends OdsComponentGenericMethods<OdsCheckboxButtonMethods> = OdsComponentGenericMethods<OdsCheckboxButtonMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCheckboxButtonEvents> = OdsComponentGenericEvents<OdsCheckboxButtonEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCheckboxButtonAttributes, OdsCheckboxButtonController>;
