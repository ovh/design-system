import { OdsTooltipAttributes } from './ods-tooltip-attributes';
import { OdsTooltipController } from './ods-tooltip-controller';
import { OdsTooltipEvents } from './ods-tooltip-events';
import { OdsTooltipMethods } from './ods-tooltip-methods';
import { OdsComponent } from '../../ods-component';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-tooltip`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsTooltip<ComponentMethods extends OdsComponentGenericMethods<OdsTooltipMethods> = OdsComponentGenericMethods<OdsTooltipMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsTooltipEvents> = OdsComponentGenericEvents<OdsTooltipEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsTooltipAttributes, OdsTooltipController>;
