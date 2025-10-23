import { DIVIDER_COLOR, Divider } from '.';
import style from './dev.module.css';

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

export const Deprecated = () => (
  <>
    <Divider color={ DIVIDER_COLOR.primary } />
    <Divider color={ DIVIDER_COLOR.neutral } />
  </>
);
