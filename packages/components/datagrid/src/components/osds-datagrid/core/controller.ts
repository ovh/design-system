import type { OsdsDatagrid } from "../osds-datagrid";
import type { CellComponent, ColumnDefinition } from 'tabulator-tables';
import { OdsDatagridColumn, OdsDatagridRow } from "../interfaces/attributes";
import { parseStringToArray } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_TEXT_SIZE } from '@ovhcloud/ods-component-text'

class OdsDatagridController {
  
    constructor(
        private readonly component: OsdsDatagrid,
    ) {}

    toTabulatorColumn(column: OdsDatagridColumn): ColumnDefinition {
        return {
            title: column.title,
            field: column.field,
            headerSort: column.isSortable ?? false,
            headerHozAlign: 'center',
            vertAlign: 'middle',
            titleFormatter: (cell: CellComponent) => this.getOdsText(cell.getValue(), ODS_TEXT_SIZE._500),
            formatter: (cell: CellComponent) => column.formatter?.(cell.getValue()) ?? this.getOdsText(cell.getValue(), ODS_TEXT_SIZE._400),
            hozAlign: 'center',
            minWidth: 100,
        }
    }

    getTabulatorColumns(columns: OdsDatagridColumn[]): ColumnDefinition[] {
        return [
            ...(this.component.isSelectable && [{
                title: '',
                formatter: 'rowSelection' as const,
                titleFormatter: 'rowSelection' as const,
                headerSort: false,
                resizable: false,
                cssClass: 'ods-selectable__input-checkbox',
                cellClick: (_e: UIEvent, cell: CellComponent) => cell.getRow().toggleSelect(),
                width: 40,
            } as ColumnDefinition] || []),
            ...columns.map((column) => this.toTabulatorColumn(column)),
        ];
    }

    getColumns(): OdsDatagridColumn[] {
        const onError = () => { this.component.logger.warn('[OsdsDatagrid] columns string could not be parsed.');}; 
        return parseStringToArray(this.component.columns, onError);
    }

    getRows(): OdsDatagridRow[] {
        const onError = () => { this.component.logger.warn('[OsdsDatagrid] rows string could not be parsed.');}; 
        return parseStringToArray(this.component.rows, onError);
    }

    private getOdsText(text: string, size: ODS_TEXT_SIZE): string {
        return `<osds-text
            size="${size}"
            color="${ODS_THEME_COLOR_INTENT.text}">
            ${text}
        </osds-text>`
    }
}

export {
    OdsDatagridController,
};
