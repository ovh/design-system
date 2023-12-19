import type { OdsInputValue } from "@ovhcloud/ods-common-core";
import type { EventEmitter } from '@stencil/core';

interface OdsFormEvent {
    odsOnSubmit: EventEmitter<Record<string, OdsInputValue>>,
}

export type {
  OdsFormEvent,
};
