import { Pagination, type PaginationPageChangeDetail, PaginationPageSelector, type PaginationPageSizeChangeDetail, PaginationPageSizeSelector, type PaginationPageUrlDetail, PaginationPages } from '@ovhcloud/ods-react';
import { type ReactElement, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PaginationLink } from './PaginationLink';
import style from './productList.module.scss';

const TOTAL_ITEMS = 200;

function getPageUrl({ page, pageSize }: PaginationPageUrlDetail): string {
  return `/products?page=${page}&size=${pageSize}`;
}

/* Counts how many times the module was evaluated. A client side navigation keeps the module
   alive, so this stays at 1; a full document load resets it. It is the plain way to see, in the
   browser, whether the pagination navigates within the app or reloads it. */
let moduleLoads = 0;

function ProductList(): ReactElement {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // The whole state of the pagination is read back from the URL, nothing is held beside it.
  const page = Number(searchParams.get('page') ?? 1);
  const pageSize = Number(searchParams.get('size') ?? 10);

  useEffect(() => {
    moduleLoads += 1;
  }, []);

  /* The pages are links, so they navigate on their own. The two controls below are not, and have
     no href for the browser to follow: they report, and the application navigates to the URL
     they describe - the same URL getPageUrl builds for the links. */
  function handlePageChange({ page, pageSize }: PaginationPageChangeDetail): void {
    navigate(getPageUrl({ page, pageSize }));
  }

  function handlePageSizeChange({ pageSize }: PaginationPageSizeChangeDetail): void {
    // Back to the first page: the page the user was on rarely exists under the new size.
    navigate(getPageUrl({ page: 1, pageSize }));
  }

  const firstItem = (page - 1) * pageSize + 1;
  const lastItem = Math.min(firstItem + pageSize - 1, TOTAL_ITEMS);

  return (
    <div className={ style['product-list'] }>
      <h1>Products</h1>

      <p>
        Page { page } of { Math.ceil(TOTAL_ITEMS / pageSize) }, showing items { firstItem } to{ ' ' }
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
        Mounts since the document was loaded: <strong>{ moduleLoads + 1 }</strong>
        { ' ' }-{ ' ' }
        a client side navigation makes this grow, a full reload sends it back to 1.
      </p>
    </div>
  );
}

export { ProductList };
