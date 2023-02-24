import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsTileAttributes } from './ods-tile-attributes';
import { OdsTileBehavior } from './ods-tile-behavior';
import { OdsTileController } from './ods-tile-controller';
import { OdsTileEvents } from './ods-tile-events';
import { OdsTileMethods } from './ods-tile-methods';

/**
 * interface description of all implementation of `ods-tile`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsTile<ComponentMethods extends OdsComponentGenericMethods<OdsTileMethods> = OdsComponentGenericMethods<OdsTileMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsTileEvents> = OdsComponentGenericEvents<OdsTileEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsTileAttributes, OdsTileController, OdsTileBehavior>;
