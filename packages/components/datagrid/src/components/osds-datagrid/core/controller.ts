import type { OsdsDatagrid } from "../osds-datagrid";
import type { ColumnDefinition } from 'tabulator-tables';
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
            headerSort: false, 
        }
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
