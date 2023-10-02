interface OdsDatagridColumn {
  field: string // the key matching the row property
  title: string // the column title
  isSortable?: boolean // Column is sortable by string
}

interface OdsDatagridRow {
  [key: string]: unknown
}


interface OdsDatagridAttribute {
  /** The list of the column */
  columns: OdsDatagridColumn[] | string;
  /** 
   * The list of the rows 
   * The key need to be according to the column field
   */
  rows: OdsDatagridRow[] | string;
  /** The rows can be selectable */
  isSelectable?: boolean
}

export {
  OdsDatagridAttribute,
  OdsDatagridColumn,
  OdsDatagridRow,
};
