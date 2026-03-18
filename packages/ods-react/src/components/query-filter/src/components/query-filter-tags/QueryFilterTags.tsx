import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { Tag } from '../../../../tag/src';
import { useQueryFilter } from '../../contexts/useQueryFilter';
import style from './queryFilterTags.module.scss';

interface QueryFilterTagsProp extends ComponentPropsWithRef<'ul'> {}

const QueryFilterTags: FC<QueryFilterTagsProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { removeTag, tags } = useQueryFilter();

  if (!tags?.length) {
    return <></>;
  }

  return (
    <ul
      className={ classNames(style['query-filter-tags'], className) }
      data-ods="query-filter-tags"
      ref={ ref }
      { ...props }>
      {
        tags.map((tag) => (
          <li key={ tag.id }>
            <Tag onClick={ () => removeTag(tag.id) }>
              { tag.label }
            </Tag>
          </li>
        ))
      }
    </ul>
  );
});

QueryFilterTags.displayName = 'QueryFilterTags';

export {
  QueryFilterTags,
  type QueryFilterTagsProp,
};
