import { Pagination } from '../../src';

export default {
  component: Pagination,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Pagination
    totalItems={20}
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Pagination
    totalItems={20} data-testid="render" />
);

export const unlayeredRule = () => (
  <>
    <style>{ ':where([data-scope="pagination"][data-part="item"]) { width: 52px; }' }</style>

    <Pagination
      data-testid="unlayered-rule"
      totalItems={20} />
  </>
);
