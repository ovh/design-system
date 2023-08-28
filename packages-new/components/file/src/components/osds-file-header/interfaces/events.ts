import type { EventEmitter } from '@stencil/core';

interface OdsFileHeaderEvent {
    filesSelected: EventEmitter<File[]>;
}

export {
    OdsFileHeaderEvent,
}
