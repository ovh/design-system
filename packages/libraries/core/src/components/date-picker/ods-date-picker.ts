import { OdsDatePickerAttributes } from './ods-date-picker-attributes';
import { OdsDatePickerController } from './ods-date-picker-controller';
import { OdsDatePickerEvents } from './ods-date-picker-events';
import { OdsDatePickerMethods } from './ods-date-picker-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-date-picker`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsDatePicker<ComponentMethods extends OdsComponentGenericMethods<OdsDatePickerMethods> = OdsComponentGenericMethods<OdsDatePickerMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsDatePickerEvents> = OdsComponentGenericEvents<OdsDatePickerEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsDatePickerAttributes, OdsDatePickerController>;
