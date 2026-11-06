import { Table } from '@ovhcloud/ods-react';

export const Tables = ({ isStriped }: { isStriped: boolean }) => (
  <>
    <Table striped><tbody /></Table>
    <Table size="sm" striped><tbody /></Table>
    <Table><tbody /></Table>
    <Table striped={ isStriped }><tbody /></Table>
    <Table striped={ !isStriped }><tbody /></Table>
  </>
);
