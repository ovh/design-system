import { TABLE_VARIANT, Table, type TableVariant } from '@ovhcloud/ods-react';

type DatagridProp = { variant?: TableVariant };

export const Datagrid = ({ variant = TABLE_VARIANT.default }: DatagridProp) => (
  <Table variant={ variant }><tbody /></Table>
);
