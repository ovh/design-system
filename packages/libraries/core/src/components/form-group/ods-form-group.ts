import { OdsFormGroupAttributes } from './ods-form-group-attributes';
import { OdsFormGroupController } from './ods-form-group-controller';
import { OdsFormGroupEvents } from './ods-form-group-events';
import { OdsFormGroupMethods } from './ods-form-group-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-form-group`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsFormGroup<ComponentMethods extends OdsComponentGenericMethods<OdsFormGroupMethods> = OdsComponentGenericMethods<OdsFormGroupMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsFormGroupEvents> = OdsComponentGenericEvents<OdsFormGroupEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsFormGroupAttributes, OdsFormGroupController>;
