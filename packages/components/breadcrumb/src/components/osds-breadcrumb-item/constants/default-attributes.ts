import type {OdsBreadcrumbItemAttribute} from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsBreadcrumbItemAttribute = Object.freeze({
  contrasted: false,
  href: '',
  isCollapsed: false,
  isExpandableItem: false,
  isLast: false,
});

export {
  DEFAULT_ATTRIBUTE,
};
