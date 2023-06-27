import { OdsTooltipContentAttributes } from './ods-tooltip-content-attributes';
import { OdsTooltipContentController } from './ods-tooltip-content-controller';
import { OdsTooltipContentEvents } from './ods-tooltip-content-events';
import { OdsTooltipContentMethods } from './ods-tooltip-content-methods';
import { OdsComponent } from '../../ods-component';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-tooltip-content`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsTooltipContent<ComponentMethods extends OdsComponentGenericMethods<OdsTooltipContentMethods> = OdsComponentGenericMethods<OdsTooltipContentMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsTooltipContentEvents> = OdsComponentGenericEvents<OdsTooltipContentEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsTooltipContentAttributes, OdsTooltipContentController>;
