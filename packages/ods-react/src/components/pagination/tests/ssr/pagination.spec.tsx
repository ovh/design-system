import { type ComponentPropsWithRef, forwardRef } from 'react';
import { renderToString } from 'react-dom/server';
import { Pagination, type PaginationPageUrlDetail, PaginationPages, type PaginationProp } from '../../src';

type Control = {
  current: boolean;
  disabled: boolean;
  href: string | null;
  page: number | null;
  part: string;
  routed: boolean;
};

function getPageUrl({ page, pageSize }: PaginationPageUrlDetail): string {
  return `/products?page=${page}&size=${pageSize}`;
}

// Stands for the link component of a routing library, and tags what it renders.
const RouterLink = forwardRef<HTMLAnchorElement, ComponentPropsWithRef<'a'>>(function RouterLink({ children, ...props }, ref) {
  return <a data-router-link="" ref={ ref } { ...props }>{ children }</a>;
});

function renderPagination(props: Partial<PaginationProp>): string {
  return renderToString(
    <Pagination
      getPageUrl={ getPageUrl }
      totalItems={ 500 }
      { ...props }>
      <PaginationPages />
    </Pagination>,
  );
}

function readControls(html: string): Control[] {
  return [...html.matchAll(/<\w+([^>]*data-part="(prev-trigger|item|next-trigger)"[^>]*)>/g)]
    .map(([, attributes, part]) => {
      const href = attributes.match(/href="([^"]*)"/);
      const index = attributes.match(/data-index="(\d+)"/);

      return {
        current: attributes.includes('aria-current="page"'),
        disabled: attributes.includes('aria-disabled="true"'),
        href: href ? href[1].replace(/&amp;/g, '&') : null,
        page: index ? Number(index[1]) : null,
        part,
        routed: attributes.includes('data-router-link'),
      };
    });
}

function link(part: string, page: number | null, href: string | null): Control {
  return { current: false, disabled: false, href, page, part, routed: false };
}

describe('Pagination server rendering', () => {
  describe('link mode', () => {
    it('should render every destination in the initial html', () => {
      const html = renderPagination({ page: 5, pageSize: 20 });

      expect(readControls(html)).toEqual([
        link('prev-trigger', null, '/products?page=4&size=20'),
        link('item', 1, '/products?page=1&size=20'),
        link('item', 4, '/products?page=4&size=20'),
        { ...link('item', 5, null), current: true, disabled: true },
        link('item', 6, '/products?page=6&size=20'),
        link('item', 25, '/products?page=25&size=20'),
        link('next-trigger', null, '/products?page=6&size=20'),
      ]);
    });

    it('should render the same links from a defaultPage', () => {
      expect(renderPagination({ defaultPage: 5, pageSize: 20 })).toBe(renderPagination({ page: 5, pageSize: 20 }));
    });

    it('should hand linkAs the controls that lead somewhere, and only those', () => {
      [{ page: 1 }, { page: 25 }, { disabled: true, page: 5 }].forEach((props) => {
        const controls = readControls(renderPagination({ linkAs: RouterLink, pageSize: 20, ...props }));

        expect(controls.filter(({ routed }) => routed)).toHaveLength(6);
        controls.forEach(({ href, routed }) => {
          expect(routed).toBe(href !== null);
        });
      });
    });

    it('should leave the boundary triggers without a destination', () => {
      const [prevOnFirst] = readControls(renderPagination({ linkAs: RouterLink, page: 1, pageSize: 20 }));
      const nextOnLast = readControls(renderPagination({ linkAs: RouterLink, page: 25, pageSize: 20 })).pop();

      expect(prevOnFirst).toEqual({ ...link('prev-trigger', null, null), disabled: true });
      expect(nextOnLast).toEqual({ ...link('next-trigger', null, null), disabled: true });
    });

    it('should leave the triggers out of range without a destination', () => {
      const nextPastLast = readControls(renderPagination({ linkAs: RouterLink, page: 99, pageSize: 20 })).pop();

      [1, 5].forEach((page) => {
        expect(readControls(renderPagination({ linkAs: RouterLink, page, totalItems: 0 }))).toEqual([
          { ...link('prev-trigger', null, null), disabled: true },
          { ...link('next-trigger', null, null), disabled: true },
        ]);
      });
      expect(nextPastLast).toEqual({ ...link('next-trigger', null, null), disabled: true });

      [-1, -5].forEach((page) => {
        const controls = readControls(renderPagination({ linkAs: RouterLink, page, pageSize: 20 }));

        expect(controls.shift()).toEqual({ ...link('prev-trigger', null, null), disabled: true });
        expect(controls.pop()).toEqual({ ...link('next-trigger', null, null), disabled: true });
      });
    });
  });
});
