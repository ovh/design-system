import { EventEmitter } from '@stencil/core';

/**
 * Transform declared events details into Stencil `EventEmitter` with these events details
 */
export type OdsStencilEvents<EventTypes> = {
  [EventName in keyof EventTypes]: EventEmitter<EventTypes[EventName]>;
}
