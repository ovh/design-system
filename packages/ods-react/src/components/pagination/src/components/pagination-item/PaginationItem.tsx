import { Pagination as VendorPagination, usePaginationContext } from '@ark-ui/react/pagination';
import { type FC, type JSX } from 'react';
import { BUTTON_VARIANT, Button } from '../../../../button/src';
import { usePagination } from '../../contexts/usePagination';
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
  const { getPageUrl } = usePagination();

  return (
    <VendorPagination.Item
      asChild
      className={ style['pagination-item'] }
      key={ index }
      type="page"
      { ...page }>
      <Button
        as={ getPageUrl ? 'a' : 'button' }
        disabled={ disabled }
        variant={ currentPage === page.value ? BUTTON_VARIANT.default : BUTTON_VARIANT.ghost }>
        { page.value }
      </Button>
    </VendorPagination.Item>
  );
};

export {
  PaginationItem,
  type PaginationItemProp,
};
