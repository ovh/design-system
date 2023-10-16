interface OdsDatagridColumn {
  field: string; // the key matching the row property
  isSortable?: boolean; // Column is sortable by string
  title: string; // the column title
  formatter?: (cellValue: string | number | boolean) => string; // The formatter for a column, sould return a string html
}

type OdsDatagridRow = Record<string, unknown>;

interface OdsDatagridAttribute {
  /** The list of the column */
  columns: OdsDatagridColumn[] | string;
  /** Height of the datagrid, in pixel */
  height: number;
  /** 
   * List of the hide columns
   * The key need to be according to the column field
   */
  hideableColumns?: string[]; 
  /** The rows can be selectable */
  isSelectable?: boolean
  /** Text when the datagrid was no rows */
  noResultLabel?: string;
  /** Height for each row, in pixel */
  rowHeight?: number;
  /**
   * The list of the rows
   * The key need to be according to the column field
   */
  rows: OdsDatagridRow[] | string;
}

export {
  OdsDatagridAttribute,
  OdsDatagridColumn,
  OdsDatagridRow,
};
