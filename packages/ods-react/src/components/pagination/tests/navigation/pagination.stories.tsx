import { type JSX, useEffect, useState } from 'react';
import { Pagination, PaginationPageSelector, PaginationPageSizeSelector, PaginationPages, type PaginationPageUrlDetail } from '../../src';

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

// The tooltip labels wrap the triggers in a TooltipTrigger, which is where the role comes from.
export const linkWithTooltips = () => (
  <Pagination
    data-testid="link-with-tooltips"
    getPageUrl={ getPageUrl }
    labelTooltipNext="Go to next page"
    labelTooltipPrev="Go to previous page"
    page={ 3 }
    pageSize={ PAGE_SIZE }
    totalItems={ 200 }>
    <PaginationPages />
  </Pagination>
);

export const linkFromUrl = () => <LinkFromUrl />;

// Records every page change reported to the application, so that a test can tell which controls
// report and which ones stay silent because the browser already followed a link.
export const linkReporting = () => (
  <Pagination
    data-testid="link-reporting"
    getPageUrl={ getPageUrl }
    onPageChange={ (detail) => {
      const store = window as unknown as { __pageChanges?: unknown[] };

      store.__pageChanges = [...(store.__pageChanges ?? []), detail];
    } }
    page={ 3 }
    pageSize={ PAGE_SIZE }
    totalItems={ 200 }>
    <PaginationPages />

    <PaginationPageSelector />
  </Pagination>
);

// The size selector has no link to follow either. Sits on the last page of the range so that a
// bigger size would leave the active page outside of it.
export const linkSizeSelection = () => (
  <Pagination
    data-testid="link-size-selection"
    getPageUrl={ getPageUrl }
    onPageChange={ (detail) => {
      const store = window as unknown as { __pageChanges?: unknown[] };

      store.__pageChanges = [...(store.__pageChanges ?? []), detail];
    } }
    onPageSizeChange={ (detail) => {
      const store = window as unknown as { __pageSizeChanges?: unknown[] };

      store.__pageSizeChanges = [...(store.__pageSizeChanges ?? []), detail];
    } }
    page={ 18 }
    pageSize={ PAGE_SIZE }
    totalItems={ 200 }>
    <PaginationPageSizeSelector />

    <PaginationPages />
  </Pagination>
);
