import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useEffect, useState } from 'react';
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
   * The tooltip label on the "next page" button.
   */
  labelTooltipNext?: string;
  /**
   * The tooltip label on the "previous page" button.
   */
  labelTooltipPrev?: string;
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
   */
  pageSize?: number;
  /**
   * @deprecated
   * @default-value='of ${totalItems} results'
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

interface PaginationProviderProp extends Pick<PaginationRootProp, 'defaultPage' | 'disabled' | 'labelTooltipNext' | 'labelTooltipPrev' | 'onPageChange' | 'onPageSizeChange' | 'page' | 'pageSize' | 'totalItems'> {
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
  labelTooltipNext,
  labelTooltipPrev,
  onPageChange,
  onPageSizeChange,
  page,
  pageSize = 10,
  totalItems,
}: PaginationProviderProp): JSX.Element {
  const [itemsPerPage, setItemsPerPage] = useState<number>(pageSize);
  const [internalPage, setInternalPage] = useState<number>(defaultPage ?? 1);
  const isControlled = page !== undefined;
  const currentPage = isControlled && page ? page : internalPage;

  useEffect(() => {
    if (!isControlled) {
      setInternalPage(defaultPage ?? 1);
    }
  }, [defaultPage, isControlled, itemsPerPage, totalItems]);

  function handlePageChange(detail: PaginationPageChangeDetail): void {
    if (!isControlled) {
      setInternalPage(detail.page);
    }
    onPageChange?.(detail);
  }

  function handlePageSizeChange(value: string): void {
    const numericValue = Number(value);

    setItemsPerPage(numericValue);

    onPageSizeChange?.({ pageSize: numericValue });
  }

  return (
    <PaginationContext.Provider value={{
      currentPage,
      defaultPage,
      disabled,
      handlePageChange,
      handlePageSizeChange,
      itemsPerPage,
      labelTooltipNext,
      labelTooltipPrev,
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
  PaginationProvider,
  type PaginationRootProp,
  type PaginationTotalItemsLabelRenderer,
  usePagination,
};
