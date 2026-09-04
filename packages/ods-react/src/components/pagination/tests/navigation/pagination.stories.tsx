import { type JSX, useEffect, useState } from 'react';
import { Pagination, PaginationPages, type PaginationPageUrlDetail } from '../../src';

export default {
  component: Pagination,
  title: 'Tests navigation',
};

const PAGE_SIZE = 10;

function getPageUrl({ page, pageSize }: PaginationPageUrlDetail): string {
  return `#page-${page}-size-${pageSize}`;
}

function readPageFromHash(): number {
  const match = window.location.hash.match(/^#page-(\d+)-size-\d+$/);

  return match ? Number(match[1]) : 1;
}

// The realistic wiring of link mode: the URL holds the page, the component only renders it.
function LinkFromUrl(): JSX.Element {
  const [page, setPage] = useState(readPageFromHash);

  useEffect(() => {
    function sync(): void {
      setPage(readPageFromHash());
    }

    window.addEventListener('hashchange', sync);

    return () => window.removeEventListener('hashchange', sync);
  }, []);

  return (
    <Pagination
      data-testid="link-from-url"
      getPageUrl={ getPageUrl }
      page={ page }
      pageSize={ PAGE_SIZE }
      totalItems={ 200 }>
      <PaginationPages />
    </Pagination>
  );
}

export const link = () => (
  <Pagination
    data-testid="link"
    defaultPage={ 1 }
    getPageUrl={ getPageUrl }
    totalItems={ 200 }>
    <PaginationPages />
  </Pagination>
);

export const linkFromUrl = () => <LinkFromUrl />;
