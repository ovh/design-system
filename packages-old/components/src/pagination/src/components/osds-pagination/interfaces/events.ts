import type { EventEmitter } from '@stencil/core';

interface OdsPaginationChangedEventDetail {
  current: number;
  oldCurrent?: number;
  itemPerPage: number;
}

type OdsPaginationCurrentChangeEvent = CustomEvent<OdsPaginationChangedEventDetail>;

interface OdsPaginationItemPerPageChangedEventDetail {
  current: number;
  currentPage: number;
  totalPages: number;
}

type OdsPaginationItemPerPageChangedEvent = CustomEvent<OdsPaginationItemPerPageChangedEventDetail>;

interface OdsPaginationEvent {
  /**
   * Emitted when the value has changed
   */
  odsPaginationChanged: EventEmitter<OdsPaginationChangedEventDetail>;
  /**
   * Emitted when the number of items per page value has changed
   */
  odsPaginationItemPerPageChanged: EventEmitter<OdsPaginationItemPerPageChangedEventDetail>;
}

export type {
  OdsPaginationCurrentChangeEvent,
  OdsPaginationChangedEventDetail,
  OdsPaginationEvent,
  OdsPaginationItemPerPageChangedEvent,
  OdsPaginationItemPerPageChangedEventDetail,
};
