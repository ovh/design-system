import { type QueryFilterProp, QueryFilter as QueryFilterRoot } from './components/query-filter/QueryFilter';
import { QueryFilterClear, type QueryFilterClearProp } from './components/query-filter-clear/QueryFilterClear';
import { QueryFilterContent, type QueryFilterContentProp } from './components/query-filter-content/QueryFilterContent';
import { QueryFilterControl, type QueryFilterControlProp } from './components/query-filter-control/QueryFilterControl';
import { QueryFilterTags, type QueryFilterTagsProp } from './components/query-filter-tags/QueryFilterTags';

const QueryFilter = Object.assign(QueryFilterRoot, {
  Clear: QueryFilterClear,
  Content: QueryFilterContent,
  Control: QueryFilterControl,
  Tags: QueryFilterTags,
});

export { QueryFilter };
export { QueryFilterClear, QueryFilterContent, QueryFilterControl, QueryFilterTags };
export type { QueryFilterProp, QueryFilterClearProp, QueryFilterContentProp, QueryFilterControlProp, QueryFilterTagsProp };
export {
  type QueryFilterInputValueChangeDetails,
  type QueryFilterItem,
  type QueryFilterOpenChangeDetail,
  type QueryFilterOption,
  type QueryFilterProperty,
  type QueryFilterValueChangeDetails,
} from './contexts/useQueryFilter';
