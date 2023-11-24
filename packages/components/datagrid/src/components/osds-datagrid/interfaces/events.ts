import type { OdsDatagridRow } from './attributes';
import type { EventEmitter } from '@stencil/core';

interface OdsDatagridEvent {
  odsSortChange: EventEmitter<{ field: string, dir: 'asc' | 'desc' | 'none' }>;
  odsRowSelectionChange: EventEmitter<{ rows: OdsDatagridRow[] }>;
  odsBottomScroll: EventEmitter<void>;
}

export type {
  OdsDatagridEvent,
};