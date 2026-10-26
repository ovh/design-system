import { type ComponentPropsWithRef, type ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

/* The Pagination hands the URL getPageUrl builds over as `href`; React Router's Link expects it
   as `to`. Mapping one onto the other is all it takes for the pages to navigate inside the
   app: a plain anchor would work too, but it would reload the whole document on every page. */
function PaginationLink({ href, ...props }: ComponentPropsWithRef<'a'> & { href: string }): ReactElement {
  return (
    <RouterLink
      to={ href }
      { ...props } />
  );
}

export { PaginationLink };
