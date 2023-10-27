interface OdsDatagridColumn {
  field: string // the key matching the row property
  isSortable?: boolean // Column is sortable by string
  title: string // the column title
}

type OdsDatagridRow = Record<string, unknown>;

interface OdsDatagridAttribute {
  /** The list of the column */
  columns: OdsDatagridColumn[] | string;
  /** The rows can be selectable */
  isSelectable?: boolean
  /** Text when the datagrid was no rows */
  noResultLabel?: string;
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
