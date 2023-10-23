import type {EventEmitter} from '@stencil/core';

interface OdsClipboardEvent {
    odsClipboardCopied: EventEmitter<string>;
}

export {
  OdsClipboardEvent,
};
