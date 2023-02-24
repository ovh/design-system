import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsRangeAttributes } from './ods-range-attributes';
import { OdsRangeBehavior } from './ods-range-behavior';
import { OdsRangeController } from './ods-range-controller';
import { OdsRangeEvents } from './ods-range-events';
import { OdsRangeMethods } from './ods-range-methods';

/**
 * interface description of all implementation of `ods-range`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsRange<ComponentMethods extends OdsComponentGenericMethods<OdsRangeMethods> = OdsComponentGenericMethods<OdsRangeMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsRangeEvents> = OdsComponentGenericEvents<OdsRangeEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsRangeAttributes, OdsRangeController, OdsRangeBehavior>;
