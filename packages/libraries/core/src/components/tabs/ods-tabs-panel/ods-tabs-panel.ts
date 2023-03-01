import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponent } from '../../ods-component';
import { OdsTabsPanelMethods } from './ods-tabs-panel-methods';
import { OdsTabsPanelEvents } from './ods-tabs-panel-events';
import { OdsTabsPanelController } from './ods-tabs-panel-controller';
import { OdsTabsPanelAttributes } from './ods-tabs-panel-attributes';
import { OdsTabsPanelBehavior } from './ods-tabs-panel-behavior';

/**
 * interface description ofe all implementation of `ods-tabs`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsTabsPanel<ComponentMethods extends OdsComponentGenericMethods<OdsTabsPanelMethods> = OdsComponentGenericMethods<OdsTabsPanelMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsTabsPanelEvents> = OdsComponentGenericEvents<OdsTabsPanelEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsTabsPanelAttributes, OdsTabsPanelController, OdsTabsPanelBehavior>;
