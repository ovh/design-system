import { type ReactNode, createContext, useContext } from 'react';
import { type Locale } from '../../../../utils/locales';

interface BreadcrumbRootProp {
  /**
   * The number of items when the component will collapse to an ellipsis.
   */
  collapseThreshold?: number,
  /**
   * Internal translations override.
   */
  i18n?: Record<string, string>,
  /**
   * Id for the breadcrumb nav (overrides auto-generated id)
   */
  id?: string,
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * The number of items to display before the ellipsis.
   */
  nbItemsAfterEllipsis?: number,
  /**
   * The number of items to display after the ellipsis.
   */
  nbItemsBeforeEllipsis?: number,
  /**
   * Whether the component should not collapse in an ellipsis regarding the number of items.
   */
  noCollapse?: boolean,
  /**
   * Callback fired when an ellipsis is expanded.
   */
  onExpand?: () => void,
}

type BreadcrumbContextType = Pick<BreadcrumbRootProp, 'i18n' | 'locale'>;
interface BreadcrumbProviderProp extends BreadcrumbContextType {
  children: ReactNode,
}
const BreadcrumbContext = createContext<BreadcrumbContextType>({});

function BreadcrumbProvider({ children, i18n, locale }: BreadcrumbProviderProp): JSX.Element {
  return (
    <BreadcrumbContext.Provider value={{
      i18n,
      locale,
    }}>
      { children }
    </BreadcrumbContext.Provider>
  );
}

function useBreadcrumb(): BreadcrumbContextType {
  return useContext(BreadcrumbContext);
}

export {
  type BreadcrumbContextType,
  type BreadcrumbProviderProp,
  type BreadcrumbRootProp,
  BreadcrumbProvider,
  useBreadcrumb,
};
