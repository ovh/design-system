import { OdsPasswordAttributes } from './ods-password-attributes';
import { OdsPasswordController } from './ods-password-controller';
import { OdsPasswordEvents } from './ods-password-events';
import { OdsPasswordMethods } from './ods-password-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-password`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsPassword<ComponentMethods extends OdsComponentGenericMethods<OdsPasswordMethods> = OdsComponentGenericMethods<OdsPasswordMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsPasswordEvents> = OdsComponentGenericEvents<OdsPasswordEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsPasswordAttributes, OdsPasswordController>;
