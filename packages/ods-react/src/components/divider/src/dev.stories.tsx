import style from './dev.module.css';
import { DIVIDER_COLOR, Divider } from '.';

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

export const Deprecated = () => (
  <>
    <Divider color={ DIVIDER_COLOR.primary } />
    <Divider color={ DIVIDER_COLOR.neutral } />
  </>
);
