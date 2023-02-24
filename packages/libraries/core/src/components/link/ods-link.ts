import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsLinkAttributes } from './ods-link-attributes';
import { OdsLinkBehavior } from './ods-link-behavior';
import { OdsLinkController } from './ods-link-controller';
import { OdsLinkEvents } from './ods-link-events';
import { OdsLinkMethods } from './ods-link-methods';

/**
 * interface description of all implementation of `ods-link`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsLink<ComponentMethods extends OdsComponentGenericMethods<OdsLinkMethods> = OdsComponentGenericMethods<OdsLinkMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsLinkEvents> = OdsComponentGenericEvents<OdsLinkEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsLinkAttributes, OdsLinkController, OdsLinkBehavior>;
