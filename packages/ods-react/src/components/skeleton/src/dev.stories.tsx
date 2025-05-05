import { Skeleton } from '.';
import style from './dev.module.css';

export default {
  component: Skeleton,
  title: 'Skeleton',
};

export const Default = () => (
  <Skeleton />
);

export const CustomStyle = () => (
  <Skeleton className={ style[ 'custom-skeleton' ] } />
);
