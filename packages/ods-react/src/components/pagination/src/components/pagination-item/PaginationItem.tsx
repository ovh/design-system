import { Pagination as VendorPagination, usePaginationContext } from '@ark-ui/react/pagination';
import { type FC, type JSX } from 'react';
import { BUTTON_EMPHASIS, Button } from '../../../../button/src';
import style from './paginationItem.module.scss';

interface PaginationItemProp {
  disabled?: boolean;
  index: number;
  page: {
    value: number;
  };
}

const PaginationItem: FC<PaginationItemProp> = ({
  disabled,
  index,
  page,
}): JSX.Element => {
  const { page: currentPage } = usePaginationContext();

  return (
    <VendorPagination.Item
      asChild
      className={ style['pagination-item'] }
      key={ index }
      type="page"
      { ...page }>
      <Button
        disabled={ disabled }
        emphasis={ currentPage === page.value ? BUTTON_EMPHASIS.high : BUTTON_EMPHASIS.low }>
        { page.value }
      </Button>
    </VendorPagination.Item>
  );
};

export {
  PaginationItem,
  type PaginationItemProp,
};
