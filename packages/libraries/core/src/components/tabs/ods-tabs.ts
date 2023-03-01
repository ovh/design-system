import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsTabsMethods } from './ods-tabs-methods';
import { OdsTabsEvents } from './ods-tabs-events';
import { OdsTabsController } from './ods-tabs-controller';
import { OdsTabsAttributes } from './ods-tabs-attributes';
import { OdsTabsBehavior } from './ods-tabs-behavior';

/**
 * interface description ofe all implementation of `ods-tabs`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsTabs<ComponentMethods extends OdsComponentGenericMethods<OdsTabsMethods> = OdsComponentGenericMethods<OdsTabsMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsTabsEvents> = OdsComponentGenericEvents<OdsTabsEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsTabsAttributes, OdsTabsController, OdsTabsBehavior>;
