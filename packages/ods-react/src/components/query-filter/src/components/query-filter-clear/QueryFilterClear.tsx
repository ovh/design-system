import { type FC, type JSX, forwardRef } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button, type ButtonProp } from '../../../../button/src';
import { useQueryFilter } from '../../contexts/useQueryFilter';

interface QueryFilterClearProp extends ButtonProp {}

const QueryFilterClear: FC<QueryFilterClearProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { removeAllTags, tags } = useQueryFilter();

  if (!tags.length) {
    return <></>;
  }

  return (
    <Button
      className={ className }
      data-ods="query-filter-clear"
      onClick={ removeAllTags }
      ref={ ref }
      size={ BUTTON_SIZE.xs }
      variant={ BUTTON_VARIANT.outline }
      { ...props }>
      { children }
    </Button>
  );
});

QueryFilterClear.displayName = 'QueryFilterClear';

export {
  QueryFilterClear,
  type QueryFilterClearProp,
};
