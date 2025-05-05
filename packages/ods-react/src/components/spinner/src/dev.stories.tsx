import { Spinner } from '.';
import style from './dev.module.css';

export default {
  component: Spinner,
  title: 'Spinner dev',
};

export const Default = () => (
  <Spinner />
);

export const CustomStyle = () => (
  <Spinner className={ style[ 'custom-spinner' ] } />
);
