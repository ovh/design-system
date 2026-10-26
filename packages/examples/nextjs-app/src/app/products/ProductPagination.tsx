'use client';
import { Pagination, type PaginationPageChangeDetail, PaginationPageSelector, type PaginationPageSizeChangeDetail, PaginationPageSizeSelector, type PaginationPageUrlDetail, PaginationPages } from '@ovhcloud/ods-react';
import NextLink from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { type JSX } from 'react';

interface ProductPaginationProp {
  page: number;
  pageSize: number;
  totalItems: number;
}

/* The only client island of the page. `next/link` takes the built URL as `href`, which is the
   prop the Pagination already hands over, so it goes in as is with no adapter.

   The page and the size come down from the server component, which read them off the query
   string. Nothing is held in state here: the URL is the state. */
export function ProductPagination({ page, pageSize, totalItems }: ProductPaginationProp): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Merged into the current query, so that a sort or a filter it holds survives the navigation.
  function getPageUrl({ page, pageSize }: PaginationPageUrlDetail): string {
    const params = new URLSearchParams(searchParams);

    params.set('page', String(page));
    params.set('size', String(pageSize));

    return `/products?${params}`;
  }

  /* The pages are links and navigate on their own. The two controls below are not, and have no
     href for the browser to follow: they report, and the application pushes the URL they
     describe - the same URL getPageUrl builds for the links. */
  function handlePageChange({ page, pageSize }: PaginationPageChangeDetail): void {
    router.push(getPageUrl({ page, pageSize }));
  }

  function handlePageSizeChange({ pageSize }: PaginationPageSizeChangeDetail): void {
    // Back to the first page: under a new size the same page number shows other items, and may lie
    // past the last page.
    router.push(getPageUrl({ page: 1, pageSize }));
  }

  return (
    <Pagination
      aria-label="Products pagination"
      getPageUrl={ getPageUrl }
      labelTooltipNext="Go to next page"
      labelTooltipPrev="Go to previous page"
      linkAs={ NextLink }
      onPageChange={ handlePageChange }
      onPageSizeChange={ handlePageSizeChange }
      page={ page }
      pageSize={ pageSize }
      totalItems={ totalItems }>
      <PaginationPageSizeSelector />

      <PaginationPages />

      <PaginationPageSelector />
    </Pagination>
  );
}
