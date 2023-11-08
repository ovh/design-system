import type { EventEmitter } from '@stencil/core';

interface OdsModalEvent {
  odsModalClose: EventEmitter<void>;
  odsModalOpen: EventEmitter<void>;
}

export {
  OdsModalEvent,
};
