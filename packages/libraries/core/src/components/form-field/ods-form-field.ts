import { OdsFormFieldAttributes } from './ods-form-field-attributes';
import { OdsFormFieldController } from './ods-form-field-controller';
import { OdsFormFieldEvents } from './ods-form-field-events';
import { OdsFormFieldMethods } from './ods-form-field-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-form-field`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsFormField<ComponentMethods extends OdsComponentGenericMethods<OdsFormFieldMethods> = OdsComponentGenericMethods<OdsFormFieldMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsFormFieldEvents> = OdsComponentGenericEvents<OdsFormFieldEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsFormFieldAttributes, OdsFormFieldController>;
