import type { EventEmitter } from '@stencil/core';

interface OdsFileEvent {
    odsCancel: EventEmitter<File>
    odsFilesChange: EventEmitter<File[]>;
    odsMaxFilesReached: EventEmitter<void>;
    odsRejectedFile: EventEmitter<File>;
}

export {
    OdsFileEvent
}
