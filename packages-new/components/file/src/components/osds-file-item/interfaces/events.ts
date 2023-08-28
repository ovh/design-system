import type { EventEmitter } from '@stencil/core';

interface OdsFileItemEvent {
    cancel: EventEmitter<void>;
}

export {
    OdsFileItemEvent
}