import type { OsdsDatagrid } from "../osds-datagrid";
import type { CellComponent, ColumnDefinition } from 'tabulator-tables';
import { OdsDatagridColumn, OdsDatagridRow } from "../interfaces/attributes";
import { parseStringToArray } from '@ovhcloud/ods-common-core';

class OdsDatagridController {
  
    constructor(
        private readonly component: OsdsDatagrid,
    ) {}

    toTabulatorColumn(column: OdsDatagridColumn): ColumnDefinition {
        return {
            title: column.title,
            field: column.field,
            headerSort: column.isSortable ?? false, 
        }
    }

    getTabulatorColumns(columns: OdsDatagridColumn[]): ColumnDefinition[] {
        return [
            ...(this.component.isSelectable && [{
                title: '',
                formatter: 'rowSelection' as const,
                titleFormatter: 'rowSelection' as const,
                headerSort: false,
                cellClick: (_e: UIEvent, cell: CellComponent) => cell.getRow().toggleSelect(),
                width: '40',
            }] || []),
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
}

export {
    OdsDatagridController,
};
