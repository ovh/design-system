import { Pagination } from '.';
import style from './dev.module.css';

export default {
  component: Pagination,
  title: 'Pagination dev',
};

export const Default = () => (
  <Pagination totalItems={50000} />
);

export const CustomStyle = () => (
  <Pagination className={ style['custom-pagination'] } totalItems={500} />
);

export const Disabled = () => (
  <Pagination totalItems={500} />
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
    renderTotalItemsLabel={({ totalItems }) => `of ${totalItems} results`}
  />
);
export const WithPageSizeSelectorAndTotalLabel = () => (
  <Pagination
    totalItems={500}
    withPageSizeSelector
  />
);
