import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsTextMethods } from './ods-text-methods';
import { OdsTextEvents } from './ods-text-events';
import { OdsTextAttributes } from './ods-text-attributes';
import { OdsTextController } from './ods-text-controller';

/**
 * interface description of all implementation of `ods-text`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsText<ComponentMethods extends OdsComponentGenericMethods<OdsTextMethods> = OdsComponentGenericMethods<OdsTextMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsTextEvents> = OdsComponentGenericEvents<OdsTextEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsTextAttributes, OdsTextController>;
