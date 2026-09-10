/* eslint-disable react-hooks/set-state-in-effect */

import { type ComponentPropsWithRef, type ElementType, type JSX, type ReactNode, createContext, useEffect, useState } from 'react';
import { useContext } from '../../../../utils/context';

/** @internal DEPRECATED: remove on next major version */
type PaginationTotalItemsLabelRenderer = (params: { totalItems: number }) => string | number;
/** DEPRECATED: remove on next major */
const defaultRenderTotalItemsLabel: PaginationTotalItemsLabelRenderer = ({ totalItems }) => `of ${totalItems} results`;

interface PaginationPageChangeDetail {
  page: number;
  pageSize: number;
}

interface PaginationPageSizeChangeDetail {
  pageSize: number,
}

interface PaginationPageUrlDetail {
  page: number;
  pageSize: number;
}

interface PaginationRootProp extends ComponentPropsWithRef<'nav'> {
  /**
   * The initial active page. Use when you don't need to control the active page of the pagination.
   */
  defaultPage?: number;
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;
  /**
   * Build the URL of a given page.
   * Providing it turns the pages and the previous / next triggers into links, so that they can be
   * crawled, opened in a new tab and restored on reload. They then look like the Link component,
   * as they navigate, instead of the Button component.
   */
  getPageUrl?: (detail: PaginationPageUrlDetail) => string;
  /**
   * The tooltip label on the "next page" button.
   */
  labelTooltipNext?: string;
  /**
   * The tooltip label on the "previous page" button.
   */
  labelTooltipPrev?: string;
  /**
   * \@default-value='a'
   * Pass a component you may want to use to render the page links.
   * Only used along `getPageUrl`. Useful to hand the navigation over to a routing library, which
   * a plain anchor would bypass with a full page load: the component receives the built URL as
   * `href` and maps it to whatever prop it expects.
   */
  linkAs?: ElementType;
  /**
   * Callback fired when the active page changes.
   */
  onPageChange?: (detail: PaginationPageChangeDetail) => void;
  /**
   * Callback fired when the page size changes.
   */
  onPageSizeChange?: (detail: PaginationPageSizeChangeDetail) => void;
  /**
   * The controlled active page
   */
  page?: number;
  /**
   * The number of items per page.
   * Along `getPageUrl` it is read on every render rather than only on mount, as the URL is then
   * what holds the size: the component renders it instead of keeping a size of its own.
   */
  pageSize?: number;
  /**
   * @deprecated
   * \@default-value='of $\{totalItems\} results'
   * Format the label displayed near the per-page selector.
   * DEPRECATED: prefer the use of the sub component PaginationPageSizeSelector
   */
  renderTotalItemsLabel?: PaginationTotalItemsLabelRenderer;
  /**
   * The number of pages to show beside active page.
   */
  siblingCount?: number;
  /**
   * The total number of items.
   */
  totalItems: number;
  /**
   * @deprecated
   * Whether the per-page selector is displayed.
   * DEPRECATED: prefer the use of the sub component PaginationPageSizeSelector
   */
  withPageSizeSelector?: boolean;
}

interface PaginationProviderProp extends Pick<PaginationRootProp, 'defaultPage' | 'disabled' | 'getPageUrl' | 'labelTooltipNext' | 'labelTooltipPrev' | 'linkAs' | 'onPageChange' | 'onPageSizeChange' | 'page' | 'pageSize' | 'totalItems'> {
  children: ReactNode;
}

type PaginationContextType = Omit<PaginationProviderProp, 'children'> & {
  currentPage: number;
  handlePageChange: (detail: PaginationPageChangeDetail) => void;
  handlePageSizeChange: (value: string) => void;
  itemsPerPage: number;
}

const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

function PaginationProvider({
  children,
  defaultPage,
  disabled,
  getPageUrl,
  labelTooltipNext,
  labelTooltipPrev,
  linkAs,
  onPageChange,
  onPageSizeChange,
  page,
  pageSize = 10,
  totalItems,
}: PaginationProviderProp): JSX.Element {
  const [internalItemsPerPage, setInternalItemsPerPage] = useState<number>(pageSize);
  const [internalPage, setInternalPage] = useState<number>(defaultPage ?? 1);
  const isControlled = page !== undefined;
  const currentPage = isControlled && page ? page : internalPage;
  // Link mode: the URL owns the page size the way it owns the page, so the component renders the
  // prop rather than a size of its own. Holding it internally would rebuild every href with a
  // size the URL does not have yet, and leave the active page outside the new range.
  const itemsPerPage = getPageUrl ? pageSize : internalItemsPerPage;

  // Warned at render time, not in an effect: link mode exists for server rendered listings, and
  // an effect never runs on the server - which is exactly where the mistake is made.
  if (getPageUrl && page === undefined && defaultPage === undefined) {
    console.warn('getPageUrl renders the pages as links, so the URL holds the active page. Please provide a controlled `page` read back from the URL, or a `defaultPage` when the page is rendered by the server, otherwise the pagination stays on page 1.');
  }

  useEffect(() => {
    if (!isControlled) {
      setInternalPage(defaultPage ?? 1);
    }
  }, [defaultPage, isControlled, itemsPerPage, totalItems]);

  function handlePageChange(detail: PaginationPageChangeDetail): void {
    // Link mode: the URL owns the active page, and following a link is the only way to change it.
    // Nothing is reported here, on purpose. React flushes a click synchronously, so a consumer
    // moving the page from this callback would rewrite the trigger href before the browser
    // follows it and land the user one page further than the link they clicked. Leaving the
    // component untouched during the click makes that impossible rather than merely discouraged.
    // The controls that are not links report on their own, see PaginationPageSelector.
    if (getPageUrl) {
      return;
    }

    if (!isControlled) {
      setInternalPage(detail.page);
    }

    onPageChange?.(detail);
  }

  function handlePageSizeChange(value: string): void {
    const numericValue = Number(value);

    // Link mode: the size is reported and nothing else, on the same grounds as the page. The
    // application navigates to the matching URL, and the new size comes back as a prop.
    if (!getPageUrl) {
      setInternalItemsPerPage(numericValue);
    }

    onPageSizeChange?.({ pageSize: numericValue });
  }

  return (
    <PaginationContext.Provider value={{
      currentPage,
      defaultPage,
      disabled,
      getPageUrl,
      handlePageChange,
      handlePageSizeChange,
      itemsPerPage,
      labelTooltipNext,
      labelTooltipPrev,
      linkAs,
      onPageChange,
      onPageSizeChange,
      page,
      pageSize,
      totalItems,
    }}>
      { children }
    </PaginationContext.Provider>
  );
}

function usePagination(): PaginationContextType {
  return useContext(PaginationContext);
}

export {
  defaultRenderTotalItemsLabel,
  type PaginationContextType,
  type PaginationPageChangeDetail,
  type PaginationPageSizeChangeDetail,
  type PaginationPageUrlDetail,
  PaginationProvider,
  type PaginationRootProp,
  type PaginationTotalItemsLabelRenderer,
  usePagination,
};
