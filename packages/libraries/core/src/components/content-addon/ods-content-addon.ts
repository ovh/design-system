import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsContentAddonMethods } from './ods-content-addon-methods';
import { OdsContentAddonEvents } from './ods-content-addon-events';
import { OdsContentAddonAttributes } from './ods-content-addon-attributes';
import { OdsContentAddonController } from './ods-content-addon-controller';

/**
 * interface description of all implementation of `ods-content-addon`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsContentAddon<ComponentMethods extends OdsComponentGenericMethods<OdsContentAddonMethods> = OdsComponentGenericMethods<OdsContentAddonMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsContentAddonEvents> = OdsComponentGenericEvents<OdsContentAddonEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsContentAddonAttributes, OdsContentAddonController>;
