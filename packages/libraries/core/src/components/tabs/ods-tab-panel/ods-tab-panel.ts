import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponent } from '../../ods-component';
import { OdsTabPanelMethods } from './ods-tab-panel-methods';
import { OdsTabPanelEvents } from './ods-tab-panel-events';
import { OdsTabPanelController } from './ods-tab-panel-controller';
import { OdsTabPanelAttributes } from './ods-tab-panel-attributes';
import { OdsTabPanelBehavior } from './ods-tab-panel-behavior';

/**
 * interface description ofe all implementation of `ods-tab`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsTabPanel<ComponentMethods extends OdsComponentGenericMethods<OdsTabPanelMethods> = OdsComponentGenericMethods<OdsTabPanelMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsTabPanelEvents> = OdsComponentGenericEvents<OdsTabPanelEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsTabPanelAttributes, OdsTabPanelController, OdsTabPanelBehavior>;
