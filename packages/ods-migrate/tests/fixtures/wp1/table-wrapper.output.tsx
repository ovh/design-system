import { Table } from '@ovhcloud/ods-react';

type DatagridProp = { variant?: 'default' | 'striped' };

export const Datagrid = ({ variant = 'default' }: DatagridProp) => (
  <Table /* TODO(ods-v20): <Table variant={…}> is removed in v20 and its value is computed at runtime: use the boolean `striped` prop, e.g. `striped={ variant === 'striped' }` */ variant={ variant }><tbody /></Table>
);
