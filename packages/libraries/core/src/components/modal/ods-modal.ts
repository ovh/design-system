import { OdsModalAttributes } from './ods-modal-attributes';
import { OdsModalController } from './ods-modal-controller';
import { OdsModalEvents } from './ods-modal-events';
import { OdsModalMethods } from './ods-modal-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-modal`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsModal<ComponentMethods extends OdsComponentGenericMethods<OdsModalMethods> = OdsComponentGenericMethods<OdsModalMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsModalEvents> = OdsComponentGenericEvents<OdsModalEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsModalAttributes, OdsModalController>;
