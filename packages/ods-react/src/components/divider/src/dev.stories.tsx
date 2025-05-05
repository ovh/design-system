import { Divider } from '.';
import style from './dev.module.css';

export default {
  component: Divider,
  title: 'Divider dev',
};

export const Default = () => (
  <Divider />
);

export const CustomStyle = () => (
  <Divider className={ style[ 'custom-divider' ] } />
);
