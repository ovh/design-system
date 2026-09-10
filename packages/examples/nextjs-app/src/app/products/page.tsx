import { type JSX } from 'react';
import { ProductPagination } from './ProductPagination';

const TOTAL_ITEMS = 200;

interface ProductsPageProp {
  searchParams: Promise<{ page?: string, size?: string }>;
}

/* A server component: the page number and the size come from the URL, the list is rendered on the
   server, and the pagination ships its links in the initial HTML. Nothing here waits for
   JavaScript, which is the whole point of the pages being links: a crawler sees every page of the
   listing. */
export default async function ProductsPage({ searchParams }: ProductsPageProp): Promise<JSX.Element> {
  const { page: rawPage, size: rawSize } = await searchParams;
  const page = Number(rawPage ?? 1);
  const pageSize = Number(rawSize ?? 10);
  const firstItem = (page - 1) * pageSize + 1;
  const lastItem = Math.min(firstItem + pageSize - 1, TOTAL_ITEMS);

  return (
    <main>
      <h1>Products</h1>

      <p>
        Page { page } of { Math.ceil(TOTAL_ITEMS / pageSize) }, rendered on the server.
      </p>

      <ul>
        {
          Array.from({ length: lastItem - firstItem + 1 }, (_, index) => (
            <li key={ index }>Product { firstItem + index }</li>
          ))
        }
      </ul>

      <ProductPagination
        page={ page }
        pageSize={ pageSize }
        totalItems={ TOTAL_ITEMS } />
    </main>
  );
}
