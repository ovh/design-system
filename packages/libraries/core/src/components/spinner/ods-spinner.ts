import { OdsSpinnerAttributes } from './ods-spinner-attributes';
import { OdsSpinnerController } from './ods-spinner-controller';
import { OdsSpinnerEvents } from './ods-spinner-events';
import { OdsSpinnerMethods } from './ods-spinner-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-spinner`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsSpinner<ComponentMethods extends OdsComponentGenericMethods<OdsSpinnerMethods> = OdsComponentGenericMethods<OdsSpinnerMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsSpinnerEvents> = OdsComponentGenericEvents<OdsSpinnerEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsSpinnerAttributes, OdsSpinnerController>;
