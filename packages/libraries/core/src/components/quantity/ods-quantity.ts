import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsQuantityAttributes } from './ods-quantity-attributes';
import { OdsQuantityBehavior } from './ods-quantity-behavior';
import { OdsQuantityController } from './ods-quantity-controller';
import { OdsQuantityEvents } from './ods-quantity-events';
import { OdsQuantityMethods } from './ods-quantity-methods';

/**
 * interface description of all implementation of `ods-quantity`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsQuantity<ComponentMethods extends OdsComponentGenericMethods<OdsQuantityMethods> = OdsComponentGenericMethods<OdsQuantityMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsQuantityEvents> = OdsComponentGenericEvents<OdsQuantityEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsQuantityAttributes, OdsQuantityController, OdsQuantityBehavior>;
