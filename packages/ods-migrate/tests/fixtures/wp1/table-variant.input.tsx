import { TABLE_VARIANT, Table } from '@ovhcloud/ods-react';

export const Tables = ({ isStriped }: { isStriped: boolean }) => (
  <>
    <Table variant={ TABLE_VARIANT.striped }><tbody /></Table>
    <Table size="sm" variant="striped"><tbody /></Table>
    <Table variant={ TABLE_VARIANT.default }><tbody /></Table>
    <Table variant={ isStriped ? TABLE_VARIANT.striped : TABLE_VARIANT.default }><tbody /></Table>
    <Table variant={ isStriped ? 'default' : 'striped' }><tbody /></Table>
  </>
);
