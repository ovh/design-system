import type { OsdsDatagrid } from '../osds-datagrid';
import type { CellComponent, ColumnDefinition } from 'tabulator-tables';

import { parseStringToArray } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_TEXT_SIZE } from '@ovhcloud/ods-component-text';

import { OdsDatagridColumn, OdsDatagridRow } from '../interfaces/attributes';

class OdsDatagridController {

  constructor(
        private readonly component: OsdsDatagrid,
  ) {}

  validateAttributes(): void {
    if (!this.component.height) {
      this.component.logger.warn('Attributes "height" need to be set');
    }
  }

  toTabulatorColumn(column: OdsDatagridColumn): ColumnDefinition {
    return {
      field: column.field,
      formatter: (cell: CellComponent) => column.formatter?.(cell.getValue()) ?? this.getOdsText(cell.getValue(), ODS_TEXT_SIZE._400),
      headerHozAlign: 'center',
      headerSort: column.isSortable ?? false,
      hozAlign: 'center',
      minWidth: 100,
      title: column.title,
      titleFormatter: (cell: CellComponent) => this.getOdsText(cell.getValue(), ODS_TEXT_SIZE._500),
      vertAlign: 'middle',
    };
  }

  getTabulatorColumns(columns: OdsDatagridColumn[]): ColumnDefinition[] {
    return [
      ...(this.component.isSelectable && [{
        cellClick: (_e: UIEvent, cell: CellComponent) => cell.getRow().toggleSelect(),
        cssClass: 'ods-selectable__input-checkbox',
        formatter: 'rowSelection' as const,
        headerSort: false,
        resizable: false,
        title: '',
        titleFormatter: 'rowSelection' as const,
        width: 40,
      } as ColumnDefinition] || []),
      ...columns.map((column) => this.toTabulatorColumn(column)),
    ];
  }

  getColumns(): OdsDatagridColumn[] {
    const onError = (): void => {
      this.component.logger.warn('[OsdsDatagrid] columns string could not be parsed.');
    };
    return parseStringToArray(this.component.columns, onError);
  }

  getRows(): OdsDatagridRow[] {
    const onError = (): void => {
      this.component.logger.warn('[OsdsDatagrid] rows string could not be parsed.');
    };
    return parseStringToArray(this.component.rows, onError);
  }

  private getOdsText(text: string, size: ODS_TEXT_SIZE): string {
    return `<osds-text
            size="${size}"
            color="${ODS_THEME_COLOR_INTENT.text}">
            ${text}
        </osds-text>`;
  }
}

export {
  OdsDatagridController,
};
