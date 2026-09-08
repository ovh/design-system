'use client';
import { Pagination, type PaginationPageUrlDetail, PaginationPages } from '@ovhcloud/ods-react';
import NextLink from 'next/link';
import { type JSX } from 'react';

interface ProductPaginationProp {
  page: number;
  pageSize: number;
  totalItems: number;
}

function getPageUrl({ page, pageSize }: PaginationPageUrlDetail): string {
  return `/products?page=${page}&size=${pageSize}`;
}

/* The only client island of the page. `next/link` takes the built URL as `href`, which is the
   prop the Pagination already hands over, so it goes in as is with no adapter. */
export function ProductPagination({ page, pageSize, totalItems }: ProductPaginationProp): JSX.Element {
  return (
    <Pagination
      aria-label="Products pagination"
      getPageUrl={ getPageUrl }
      labelTooltipNext="Go to next page"
      labelTooltipPrev="Go to previous page"
      linkAs={ NextLink }
      page={ page }
      pageSize={ pageSize }
      totalItems={ totalItems }>
      <PaginationPages />
    </Pagination>
  );
}
