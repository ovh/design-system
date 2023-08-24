import type { EventEmitter } from '@stencil/core';

interface OdsSwitchChangedEventDetail {
    current: string;
    previous?: string;
}
  
interface OdsSwitchEvent {
    /**
     * Event triggered on accordion toggle
     */
    odsSwitchChanged: EventEmitter<OdsSwitchChangedEventDetail>;
}

export {
    OdsSwitchChangedEventDetail,
    OdsSwitchEvent,
}