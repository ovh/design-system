import { Pagination, PaginationPages, type PaginationPageUrlDetail } from '../../src';

export default {
  component: Pagination,
  title: 'Tests rendering',
};

function getPageUrl({ page, pageSize }: PaginationPageUrlDetail): string {
  return `#page-${page}-size-${pageSize}`;
}

export const customStyle = () => (
  <Pagination
    totalItems={20}
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const link = () => (
  <Pagination
    data-testid="link"
    defaultPage={ 1 }
    getPageUrl={ getPageUrl }
    totalItems={ 200 }>
    <PaginationPages />
  </Pagination>
);

export const linkDisabled = () => (
  <Pagination
    data-testid="link-disabled"
    defaultPage={ 1 }
    disabled
    getPageUrl={ getPageUrl }
    totalItems={ 200 }>
    <PaginationPages />
  </Pagination>
);

export const pages = () => (
  <Pagination
    data-testid="pages"
    totalItems={ 200 }>
    <PaginationPages />
  </Pagination>
);

export const render = () => (
  <Pagination
    totalItems={20} data-testid="render" />
);
