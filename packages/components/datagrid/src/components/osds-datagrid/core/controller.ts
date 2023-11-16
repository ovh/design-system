import type { OdsDatagridColumn, OdsDatagridRow } from '../interfaces/attributes';
import type { OsdsDatagrid } from '../osds-datagrid';
import type { CellComponent, ColumnDefinition } from 'tabulator-tables';
import { parseStringToArray } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '@ovhcloud/ods-component-button';
import { ODS_CHECKBOX_BUTTON_SIZE } from '@ovhcloud/ods-component-checkbox-button';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { ODS_TEXT_SIZE } from '@ovhcloud/ods-component-text';
class OdsDatagridController {

  constructor(
        private readonly component: OsdsDatagrid,
  ) {}

  toTabulatorColumn(column: OdsDatagridColumn): ColumnDefinition {
    return {
      field: column.field,
      formatter: (cell: CellComponent): string => {
        return column.formatter?.(cell.getValue(), cell.getRow().getData()) ?? this.getOdsText(cell.getValue(), ODS_TEXT_SIZE._400);
      },
      headerHozAlign: 'center',
      headerSort: column.isSortable ?? false,
      hozAlign: 'center',
      minWidth: 100,
      title: column.title,
      titleFormatter: (cell: CellComponent) => this.getOdsText(cell.getValue(), ODS_TEXT_SIZE._500),
      vertAlign: 'middle',
      visible: this.component.hasHideableColumns ? !this.component.hideableColumns?.some((col) => column.field === col) : true,
    };
  }

  validateAttributes(): void {
    if (!this.component.height) {
      this.component.logger.warn('[OsdsDatagrid] Attributes "height" need to be set');
    }
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
      }] || []),
      ...columns.map((column) => this.toTabulatorColumn(column)),
      ...(this.component.hasHideableColumns && [{
        cssClass: 'ods-hidabled-columns',
        headerSort: false,
        resizable: false,
        title: '',
        titleFormatter: () => this.getOdsPopover(columns),
        width: 60,
      }] || []),
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

  private getOdsPopover(columns: OdsDatagridColumn[]): string {
    return `<osds-popover>
        <span slot="popover-trigger">
          <osds-button size="${ODS_BUTTON_SIZE.sm}" variant="${ODS_BUTTON_VARIANT.ghost}" color="${ODS_THEME_COLOR_INTENT.primary}">
            <osds-icon color="${ODS_THEME_COLOR_INTENT.primary}" size="${ODS_ICON_SIZE.sm}" name="${ODS_ICON_NAME.GEAR}"></osds-icon>
          </osds-button>
        </span>
        <osds-popover-content>
          ${
  columns.map((column) => {
    const isChecked = !this.component.hideableColumns?.includes(column.field);
    return `<osds-checkbox value="${column.field}" checked="${isChecked}">
                <osds-checkbox-button color="${ODS_THEME_COLOR_INTENT.primary}" size="${ODS_CHECKBOX_BUTTON_SIZE.sm}">
                  <span slot="end">${column.title}</span>
                </osds-checkbox-button>
              </osds-checkbox>`;
  }).join('')
}
        </osds-popover-content>
      </osds-popover>`;
  }
}

export {
  OdsDatagridController,
};
