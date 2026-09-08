import { type JSX } from 'react';
import { ProductPagination } from './ProductPagination';

const PAGE_SIZE = 10;
const TOTAL_ITEMS = 200;

interface ProductsPageProp {
  searchParams: Promise<{ page?: string }>;
}

/* A server component: the page number comes from the URL, the list is rendered on the server, and
   the pagination ships its links in the initial HTML. Nothing here waits for JavaScript, which is
   the whole point of the pages being links: a crawler sees every page of the listing. */
export default async function ProductsPage({ searchParams }: ProductsPageProp): Promise<JSX.Element> {
  const { page: rawPage } = await searchParams;
  const page = Number(rawPage ?? 1);
  const firstItem = (page - 1) * PAGE_SIZE + 1;

  return (
    <main>
      <h1>Products</h1>

      <p>
        Page { page } of { TOTAL_ITEMS / PAGE_SIZE }, rendered on the server.
      </p>

      <ul>
        {
          Array.from({ length: PAGE_SIZE }, (_, index) => (
            <li key={ index }>Product { firstItem + index }</li>
          ))
        }
      </ul>

      <ProductPagination
        page={ page }
        pageSize={ PAGE_SIZE }
        totalItems={ TOTAL_ITEMS } />
    </main>
  );
}
