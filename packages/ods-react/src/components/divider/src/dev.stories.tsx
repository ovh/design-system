import style from './dev.module.css';
import { Divider } from '.';

export default {
  component: Divider,
  title: 'Divider dev',
};

export const CustomStyle = () => (
  <Divider className={ style[ 'custom-divider' ] } />
);

export const Default = () => (
  <Divider />
);

export const Vertical = () => (
  <Divider orientation="vertical" />
);
