import { Pagination } from '.';

export default {
  component: Pagination,
  title: 'Pagination dev',
};

export const Default = () => (
  <Pagination totalItems={50000} />
);

export const Disabled = () => (
  <Pagination totalItems={500} />
);

export const WithLabels = () => (
  <Pagination totalItems={500} labelTooltipPrev={'Go to prev page'} labelTooltipNext={'Go to next page'} />
);
