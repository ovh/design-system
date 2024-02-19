import type { EventEmitter } from '@stencil/core';

interface OdsChipEvent {
  odsChipRemoval: EventEmitter<void>;
}

export type {
  OdsChipEvent,
};
