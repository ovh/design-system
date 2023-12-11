import type { EventEmitter } from '@stencil/core';

interface OdsTabsChangeEventDetail {
  panel: string;
}

interface OdsTabsEvent {
  /** The selected tab changed */
  odsTabsChanged: EventEmitter<OdsTabsChangeEventDetail>;
}

export {
  OdsTabsEvent,
  OdsTabsChangeEventDetail,
};