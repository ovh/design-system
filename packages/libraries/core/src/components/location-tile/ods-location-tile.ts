import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsLocationTileAttributes } from './ods-location-tile-attributes';
import { OdsLocationTileBehavior } from './ods-location-tile-behavior';
import { OdsLocationTileController } from './ods-location-tile-controller';
import { OdsLocationTileEvents } from './ods-location-tile-events';
import { OdsLocationTileMethods } from './ods-location-tile-methods';

/**
 * interface description of all implementation of `ods-location-tile`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsLocationTile<ComponentMethods extends OdsComponentGenericMethods<OdsLocationTileMethods> = OdsComponentGenericMethods<OdsLocationTileMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsLocationTileEvents> = OdsComponentGenericEvents<OdsLocationTileEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsLocationTileAttributes, OdsLocationTileController, OdsLocationTileBehavior>;
