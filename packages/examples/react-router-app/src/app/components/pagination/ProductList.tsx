import { Pagination, type PaginationPageUrlDetail, PaginationPages } from '@ovhcloud/ods-react';
import { type ReactElement, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationLink } from './PaginationLink';
import style from './productList.module.scss';

const PAGE_SIZE = 10;
const TOTAL_ITEMS = 200;

/* Counts how many times the module was evaluated. A client side navigation keeps the module
   alive, so this stays at 1; a full document load resets it. It is the plain way to see, in the
   browser, whether the pagination navigates within the app or reloads it. */
let moduleLoads = 0;

function ProductList(): ReactElement {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);

  useEffect(() => {
    moduleLoads += 1;
  }, []);

  function getPageUrl({ page, pageSize }: PaginationPageUrlDetail): string {
    return `/products?page=${page}&size=${pageSize}`;
  }

  const firstItem = (page - 1) * PAGE_SIZE + 1;

  return (
    <div className={ style['product-list'] }>
      <h1>Products</h1>

      <p>
        Page { page } of { TOTAL_ITEMS / PAGE_SIZE }, showing items { firstItem } to{ ' ' }
        { firstItem + PAGE_SIZE - 1 }.
      </p>

      <ul>
        {
          Array.from({ length: PAGE_SIZE }, (_, index) => (
            <li key={ index }>Product { firstItem + index }</li>
          ))
        }
      </ul>

      {/* The page lives in the URL: it is read back from the query string, never held in state.
          `linkAs` hands the navigation to React Router, so moving between pages does not reload
          the document. Drop it and every page becomes a plain anchor: still correct, but a full
          page load each time. */}
      <Pagination
        aria-label="Products pagination"
        getPageUrl={ getPageUrl }
        labelTooltipNext="Go to next page"
        labelTooltipPrev="Go to previous page"
        linkAs={ PaginationLink }
        page={ page }
        pageSize={ PAGE_SIZE }
        totalItems={ TOTAL_ITEMS }>
        <PaginationPages />
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
