import type { EventEmitter } from '@stencil/core';

interface OdsCollapsibleEvent {
  /**
   * Event triggered on collapsible toggle
   */
   odsCollapsibleToggle: EventEmitter<boolean>;
}

export {
  OdsCollapsibleEvent,
};
