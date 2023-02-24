import { OdsCodeBehavior } from './ods-code-behavior';
import { OdsCodeAttributes } from './ods-code-attributes';
import { OdsCodeController } from './ods-code-controller';
import { OdsCodeEvents } from './ods-code-events';
import { OdsCodeMethods } from './ods-code-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-code`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCode<ComponentMethods extends OdsComponentGenericMethods<OdsCodeMethods> = OdsComponentGenericMethods<OdsCodeMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCodeEvents> = OdsComponentGenericEvents<OdsCodeEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCodeAttributes, OdsCodeController, OdsCodeBehavior>;
