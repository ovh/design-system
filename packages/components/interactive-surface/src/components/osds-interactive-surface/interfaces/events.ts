import type { EventEmitter } from '@stencil/core';

interface OdsInteractiveSurfaceEvent {
  /**
   * Event triggered on InteractiveSurface blur
   */
  odsBlur: EventEmitter<void>;
  /**
   * Event triggered on InteractiveSurface focus
   */
  odsInteractiveSurfaceFocus: EventEmitter<void>;
}

export {
  OdsInteractiveSurfaceEvent,
};
