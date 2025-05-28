import { Pagination as VendorPagination, usePaginationContext } from '@ark-ui/react/pagination';
import { BUTTON_VARIANT, Button } from '../../../../button/src';
import style from './paginationItem.module.scss';

interface PaginationItemProp {
  index: number;
  page: {
    value: number;
  };
  disabled?: boolean;
}

const PaginationItem = ({ index, page, disabled }: PaginationItemProp): JSX.Element => {
  const { page: VendorPage } = usePaginationContext();

  return <VendorPagination.Item
    type={'page'}
    asChild
    className={ style[ 'pagination__item' ] }
    key={ index } { ...page }>
    <Button
      disabled={ disabled }
      variant={ VendorPage === page.value ? BUTTON_VARIANT.default : BUTTON_VARIANT.ghost }>
      { page.value }
    </Button>
  </VendorPagination.Item>;
};

export { PaginationItem, type PaginationItemProp };
