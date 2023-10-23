import type {EventEmitter} from '@stencil/core';

interface OdsPaginationChangedEventDetail {
  current: number;
  oldCurrent?: number;
}

type OdsPaginationCurrentChangeEvent = CustomEvent<OdsPaginationChangedEventDetail>;

interface OdsPaginationEvent {
  /**
   * Emitted when the value has changed
   */
  odsPaginationChanged: EventEmitter<OdsPaginationChangedEventDetail>;
}

export {
  OdsPaginationCurrentChangeEvent,
  OdsPaginationChangedEventDetail,
  OdsPaginationEvent,
};
