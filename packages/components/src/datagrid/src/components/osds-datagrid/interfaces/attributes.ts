import type { CellComponent } from 'tabulator-tables';

interface OdsDatagridColumn {
  field: string; // the key matching the row property
  isSortable?: boolean; // Column is sortable by string
  title: string; // the column title
  formatter?: (cellValue: string | number | boolean, rowValue: OdsDatagridRow, cell: CellComponent, onRendered: (callback: () => void) => void) => string; // The formatter for a column, sould return a string html
}

type OdsDatagridRow = Record<string, unknown>;

interface OdsDatagridAttribute {
  /** The list of the column */
  columns: OdsDatagridColumn[] | string;
  /** Can you hide columns */
  hasHideableColumns?: boolean;
  /** Height of the datagrid, in pixel */
  height: number;
  /**
   * List of the hide columns
   * The key need to be according to the column field
   */
  hideableColumns?: string[];
  /** The rows can be selected */
  isSelectable?: boolean
  /** Text when the datagrid has no rows */
  noResultLabel?: string;
  /** Height for each row, in pixel */
  rowHeight?: number;
  /**
   * The list of the rows
   * The key needs to be according to the column field
   */
  rows: OdsDatagridRow[] | string;
}

export type {
  OdsDatagridAttribute,
  OdsDatagridColumn,
  OdsDatagridRow,
};
