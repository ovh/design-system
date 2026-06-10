import style from './dev.module.css';
import { Skeleton } from '.';

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
