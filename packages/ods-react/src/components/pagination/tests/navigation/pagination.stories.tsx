import { type ComponentPropsWithRef, type JSX, forwardRef, useEffect, useState } from 'react';
import { Pagination, PaginationPageSelector, PaginationPageSizeSelector, PaginationPages, type PaginationPageUrlDetail } from '../../src';

export default {
  component: Pagination,
  title: 'Tests navigation',
};

const PAGE_SIZE = 10;

function getPageUrl({ page, pageSize }: PaginationPageUrlDetail): string {
  return `#page-${page}-size-${pageSize}`;
}

function readHash(): PaginationPageUrlDetail {
  const match = window.location.hash.match(/^#page-(\d+)-size-(\d+)$/);

  return match ? { page: Number(match[1]), pageSize: Number(match[2]) } : { page: 1, pageSize: PAGE_SIZE };
}

// The realistic wiring of link mode: the URL holds the page and the size, the component only
// renders them.
function LinkFromUrl(): JSX.Element {
  const [{ page, pageSize }, setDetail] = useState(readHash);

  useEffect(() => {
    function sync(): void {
      setDetail(readHash());
    }

    window.addEventListener('hashchange', sync);

    return () => window.removeEventListener('hashchange', sync);
  }, []);

  return (
    <Pagination
      data-testid="link-from-url"
      getPageUrl={ getPageUrl }
      onPageSizeChange={ (detail) => {
        window.location.hash = getPageUrl({ page: 1, pageSize: detail.pageSize });
      } }
      page={ page }
      pageSize={ pageSize }
      totalItems={ 200 }>
      <PaginationPageSizeSelector />

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

// Stands for the link component of a routing library, and tags what it renders so that a test can
// tell which controls were handed to it.
const RouterLink = forwardRef<HTMLAnchorElement, ComponentPropsWithRef<'a'>>(function RouterLink(props, ref) {
  return <a data-router-link="" ref={ ref } { ...props } />;
});

export const linkAs = () => (
  <Pagination
    data-testid="link-as"
    defaultPage={ 1 }
    getPageUrl={ getPageUrl }
    linkAs={ RouterLink }
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

// Narrower than its nine cells, so that the row has to overflow.
export const linkNarrow = () => (
  <Pagination
    data-testid="link-narrow"
    defaultPage={ 1 }
    getPageUrl={ getPageUrl }
    totalItems={ 200 }>
    <PaginationPages style={ { width: '320px' } } />
  </Pagination>
);

// The same, with page numbers wider than a page button.
export const linkNarrowLongPages = () => (
  <Pagination
    data-testid="link-narrow-long-pages"
    defaultPage={ 50_000_000 }
    getPageUrl={ getPageUrl }
    totalItems={ 1_000_000_000 }>
    <PaginationPages style={ { width: '320px' } } />
  </Pagination>
);

// Records every page change reported to the application, so that a test can tell which controls
// report and which ones stay silent because the browser already followed a link. Sits on the last
// page, so that a page past it brings the form back to the active one.
export const linkReporting = () => (
  <Pagination
    data-testid="link-reporting"
    getPageUrl={ getPageUrl }
    onPageChange={ (detail) => {
      const store = window as unknown as { __pageChanges?: unknown[] };

      store.__pageChanges = [...(store.__pageChanges ?? []), detail];
    } }
    page={ 20 }
    pageSize={ PAGE_SIZE }
    totalItems={ 200 }>
    <PaginationPages />

    <PaginationPageSelector />
  </Pagination>
);

// The size selector has no link to follow either. Sits on page 18 of 20, past the 8 pages a size
// of 25 leaves, so that a bigger size would leave the active page outside of the range.
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

// Button mode, already past the last page, so that submitting that same page brings it back to the
// last one.
export const buttonPastLastPage = () => (
  <Pagination
    data-testid="button-past-last-page"
    defaultPage={ 99 }
    onPageChange={ (detail) => {
      const store = window as unknown as { __pageChanges?: unknown[] };

      store.__pageChanges = [...(store.__pageChanges ?? []), detail];
    } }
    totalItems={ 200 }>
    <PaginationPages />

    <PaginationPageSelector />
  </Pagination>
);
