import { OdsTextAreaController } from './ods-textarea-controller';
import { OdsTextAreaEvents } from './ods-textarea-events';
import { OdsTextAreaAttributes } from './ods-textarea-attributes';
import { OdsTextAreaMethods } from './ods-textarea-methods';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsTextAreaBehavior } from './ods-textarea-behavior';

/**
 * interface description of all implementation of `ods-textarea`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsTextArea<
  ComponentMethods extends OdsComponentGenericMethods<OdsTextAreaMethods> = OdsComponentGenericMethods<OdsTextAreaMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsTextAreaEvents> = OdsComponentGenericEvents<OdsTextAreaEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsTextAreaAttributes, OdsTextAreaController, OdsTextAreaBehavior>;
