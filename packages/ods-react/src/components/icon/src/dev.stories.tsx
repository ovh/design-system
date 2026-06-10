import style from './dev.module.css';
import { ICON_NAME, Icon } from '.';

export default {
  component: Icon,
  title: 'Icon dev',
};

export const Default = () => (
  <Icon name={ ICON_NAME.circleCheck } />
);

export const CustomStyle = () => (
  <Icon
    className={ style['custom-icon'] }
    name={ ICON_NAME.circleCheck }
  />
);
