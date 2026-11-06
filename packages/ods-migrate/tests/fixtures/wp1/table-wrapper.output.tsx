/* TODO(ods-v20): TABLE_VARIANT, TableVariant: removed in v20, delete them from this import once the places marked below no longer use them */ import { TABLE_VARIANT, Table, type TableVariant } from '@ovhcloud/ods-react';

type DatagridProp = { variant?: /* TODO(ods-v20): TableVariant has no v20 equivalent: use `TableProp['striped']` (a boolean) */ TableVariant };

export const Datagrid = ({ variant = /* TODO(ods-v20): TABLE_VARIANT.default has no v20 equivalent: a Table is not striped by default: delete it, or use `striped={ false }` */ TABLE_VARIANT.default }: DatagridProp) => (
  <Table /* TODO(ods-v20): <Table variant={…}> is removed in v20 and its value is computed at runtime: use the boolean `striped` prop, e.g. `striped={ variant === 'striped' }` */ variant={ variant }><tbody /></Table>
);
