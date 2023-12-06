import type { OdsBreadcrumbItemAttribute } from '../interfaces/attributes';
import { OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';

const DEFAULT_ATTRIBUTE: OdsBreadcrumbItemAttribute = Object.freeze({
  contrasted: false,
  disabled: false,
  href: '',
  isCollapsed: false,
  isExpandableItem: false,
  isLast: false,
  target: OdsHTMLAnchorElementTarget._self,
});

export {
  DEFAULT_ATTRIBUTE,
};
