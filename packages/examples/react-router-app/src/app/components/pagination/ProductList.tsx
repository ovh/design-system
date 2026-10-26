import { Pagination, type PaginationPageChangeDetail, PaginationPageSelector, type PaginationPageSizeChangeDetail, PaginationPageSizeSelector, type PaginationPageUrlDetail, PaginationPages } from '@ovhcloud/ods-react';
import { type ReactElement } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PaginationLink } from './PaginationLink';
import style from './productList.module.scss';

const TOTAL_ITEMS = 200;

/* Lives at module scope, so a client side navigation keeps it while a full document load computes
   it again. Watching it hold still as the pages change is the plain way to see, in the browser,
   whether the pagination navigates within the app or reloads it. */
const documentLoadedAt = new Date().toLocaleTimeString();

function ProductList(): ReactElement {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // The whole state of the pagination is read back from the URL, nothing is held beside it.
  // The URL can hold anything: a size that is not a positive integer falls back on 10, and the
  // page is kept within the listing, as from an out of range page the previous link would count
  // down through pages that do not exist either. See "Wiring link mode" in the Pagination docs.
  const size = Number(searchParams.get('size'));
  const pageSize = Number.isSafeInteger(size) && size > 0 ? size : 10;
  const totalPages = Math.ceil(TOTAL_ITEMS / pageSize);
  const requestedPage = Number(searchParams.get('page'));
  const page = Number.isInteger(requestedPage) ? Math.min(Math.max(requestedPage, 1), totalPages) : 1;

  // Merged into the current query, so that a sort or a filter it holds survives the navigation.
  function getPageUrl({ page, pageSize }: PaginationPageUrlDetail): string {
    const params = new URLSearchParams(searchParams);

    params.set('page', String(page));
    params.set('size', String(pageSize));

    return `/products?${params}`;
  }

  /* The pages are links, so they navigate on their own. The two controls below are not, and have
     no href for the browser to follow: they report, and the application navigates to the URL
     they describe - the same URL getPageUrl builds for the links. */
  function handlePageChange({ page, pageSize }: PaginationPageChangeDetail): void {
    navigate(getPageUrl({ page, pageSize }));
  }

  function handlePageSizeChange({ pageSize }: PaginationPageSizeChangeDetail): void {
    // Back to the first page: under a new size the same page number shows other items, and may lie
    // past the last page.
    navigate(getPageUrl({ page: 1, pageSize }));
  }

  const firstItem = (page - 1) * pageSize + 1;
  const lastItem = Math.min(firstItem + pageSize - 1, TOTAL_ITEMS);

  return (
    <div className={ style['product-list'] }>
      <h1>Products</h1>

      <p>
        Page { page } of { totalPages }, showing items { firstItem } to{ ' ' }
        { lastItem }.
      </p>

      <ul>
        {
          Array.from({ length: lastItem - firstItem + 1 }, (_, index) => (
            <li key={ index }>Product { firstItem + index }</li>
          ))
        }
      </ul>

      {/* `linkAs` hands the navigation to React Router, so moving between pages does not reload
          the document. Drop it and every page becomes a plain anchor: still correct, but a full
          page load each time. */}
      <Pagination
        aria-label="Products pagination"
        getPageUrl={ getPageUrl }
        labelTooltipNext="Go to next page"
        labelTooltipPrev="Go to previous page"
        linkAs={ PaginationLink }
        onPageChange={ handlePageChange }
        onPageSizeChange={ handlePageSizeChange }
        page={ page }
        pageSize={ pageSize }
        totalItems={ TOTAL_ITEMS }>
        <PaginationPageSizeSelector />

        <PaginationPages />

        <PaginationPageSelector />
      </Pagination>

      <p
        className={ style['product-list__probe'] }
        data-testid="probe">
        Document loaded at <strong>{ documentLoadedAt }</strong>
        { ' ' }-{ ' ' }
        moving between pages leaves it untouched, a full reload moves it on.
      </p>
    </div>
  );
}

export { ProductList };
