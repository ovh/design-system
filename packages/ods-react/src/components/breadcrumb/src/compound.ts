import { type BreadcrumbProp, Breadcrumb as BreadcrumbRoot } from './components/breadcrumb/Breadcrumb';
import { BreadcrumbItem, type BreadcrumbItemProp } from './components/breadcrumb-item/BreadcrumbItem';
import { BreadcrumbLink, type BreadcrumbLinkProp } from './components/breadcrumb-link/BreadcrumbLink';

const Breadcrumb = {
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Root: BreadcrumbRoot,
};

export { Breadcrumb };
export type { BreadcrumbProp, BreadcrumbItemProp, BreadcrumbLinkProp };
export { BREADCRUMB_I18N } from './constants/breadcrumb-i18n';
