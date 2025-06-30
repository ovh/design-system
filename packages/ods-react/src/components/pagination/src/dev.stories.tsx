import { useEffect, useState } from 'react';
import { Pagination, type PaginationPageChangeDetail, type PaginationPageSizeChangeDetail } from '.';
import style from './dev.module.css';

export default {
  component: Pagination,
  title: 'Pagination dev',
};

export const Controlled = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    console.log(`Query new ${pageSize} results for page ${currentPage}`);
  }, [currentPage, pageSize]);

  function onPageChange({ page }: PaginationPageChangeDetail) {
    setCurrentPage(page);
  }

  function onPageSizeChange({ pageSize }: PaginationPageSizeChangeDetail) {
    setPageSize(pageSize);
  }

  return (
    <Pagination
      onPageChange={ onPageChange }
      onPageSizeChange={ onPageSizeChange }
      page={ currentPage }
      pageSize={ pageSize }
      totalItems={ 500 }
      withPageSizeSelector />
  );
};

export const Default = () => (
  <Pagination defaultPage={10} totalItems={50000} />
);

export const CustomStyle = () => (
  <Pagination className={ style['custom-pagination'] } totalItems={500} />
);

export const Disabled = () => (
  <Pagination disabled totalItems={500} />
);

export const WithLabels = () => (
  <Pagination totalItems={500} labelTooltipPrev={'Go to prev page'} labelTooltipNext={'Go to next page'} />
);

export const WithPageSizeSelector = () => (
  <Pagination totalItems={500} withPageSizeSelector />
)

export const WithPageSizeSelectorAndCustomTotalLabel = () => (
  <Pagination
    totalItems={500}
    withPageSizeSelector
    renderTotalItemsLabel={({ totalItems }) => `sur ${totalItems} résultats`}
  />
);
